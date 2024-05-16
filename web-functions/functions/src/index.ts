/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import * as admin from "firebase-admin";

admin.initializeApp();

import * as logger from "firebase-functions/logger";
import {firestore} from "firebase-functions";
import {getDatabase} from "firebase-admin/database";

const db = getDatabase();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// noinspection JSUnusedGlobalSymbols
export const updateTriggers = firestore
  .document("/devices/{deviceId}/measures/{measureId}")
  .onCreate(async (snapshot, context) => {
    const newDoc = snapshot.data();
    const temperature = newDoc.temperature;
    const humidity = newDoc.humidity;

    let startFan: boolean;
    let startHumidifier: boolean;

    const ref = db.ref(`/devices/${context.params.deviceId}/triggers`);
    if (temperature >= 34) {
      // eslint-disable-next-line max-len
      logger.info("La temperatura es mayor o igual a 34 grados Celsius, encendiendo ventilador.");
      startFan = true;
    } else {
      // eslint-disable-next-line max-len
      logger.info("Temperatura menor a 34 grados Celsius, apagando ventilador.");
      startFan = false;
    }

    if (humidity <= 20) {
      // eslint-disable-next-line max-len
      logger.info("La humedad es menor o igual a 20%, encendiendo humificador.");
      startHumidifier = true;
    } else {
      logger.info("La humedad es mayor a 20%, apagando humificador.");
      startHumidifier = false;
    }

    await ref.set({
      start_fan: startFan,
      start_humidifier: startHumidifier,
    });
  });
