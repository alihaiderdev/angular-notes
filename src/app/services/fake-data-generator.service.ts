import { Injectable } from '@angular/core';
import * as faker from 'faker';
import emojis from '../../assets/data/emojis';

@Injectable({
  providedIn: 'root',
})
export class FakeDataGeneratorService {
  arrayItemsCount: number = 1000;
  constructor() {}
  generateRandomPeoples() {
    const {
      zipCode,
      zipCodeByState,
      city,
      cityPrefix,
      citySuffix,
      cityName,
      streetName,
      streetAddress,
      streetSuffix,
      streetPrefix,
      secondaryAddress,
      county,
      country,
      countryCode,
      state,
      stateAbbr,
      latitude,
      longitude,
      direction,
      cardinalDirection,
      ordinalDirection,
      nearbyGPSCoordinate,
      timeZone,
    } = faker.address;

    return Array(this.arrayItemsCount)
      .fill(1)
      .map((_) => {
        return {
          image: faker.image.imageUrl(),
          name: faker.name.findName(),
          email: faker.internet.email().toLowerCase(),
          bio: faker.hacker.phrase(),
          card: faker.helpers.createCard(),
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          address: {
            zipCode: zipCode(),
            zipCodeByState: zipCodeByState(state()),
            city: city(),
            cityPrefix: cityPrefix(),
            citySuffix: citySuffix(),
            cityName: cityName(),
            streetName: streetName(),
            streetAddress: streetAddress(),
            streetSuffix: streetSuffix(),
            streetPrefix: streetPrefix(),
            secondaryAddress: secondaryAddress(),
            county: county(),
            country: country(),
            countryCode: countryCode(),
            state: state(),
            stateAbbr: stateAbbr(),
            latitude: latitude(),
            longitude: longitude(),
            direction: direction(),
            cardinalDirection: cardinalDirection(),
            ordinalDirection: ordinalDirection(),
            nearbyGPSCoordinate: nearbyGPSCoordinate(),
            timeZone: timeZone(),
          },
        };
      });
  }
}
