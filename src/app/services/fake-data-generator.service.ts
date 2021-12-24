import { Injectable } from '@angular/core';
import * as faker from 'faker';
import emojis from '../../assets/data/emojis';

@Injectable({
  providedIn: 'root',
})
export class FakeDataGeneratorService {
  // arrayItemsCount: number = 10;
  arrayItemsCount: number = 100;
  constructor() {}
  getRandomIntInclusive(min: number, max: number): number {
    return Math.floor(
      Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min)
    ); //The maximum is inclusive and the minimum is inclusive
  }

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
      .map((_, i) => {
        return {
          // image: faker.image.imageUrl(),
          // image: 'https://random.imagecdn.app/500/150',

          // image: `https://picsum.photos/id/${
          //   i === 97 ? 101 : i === 86 ? 102 : i
          // }/height/width`,

          //  https://picsum.photos/id/86/300/300 404
          //  https://picsum.photos/id/207/300/300 404
          //  https://picsum.photos/id/138/300/300 404
          //  https://picsum.photos/id/97/300/300 404
          //  https://picsum.photos/id/205/300/300 404
          //  https://picsum.photos/id/148/300/300 404
          //  https://picsum.photos/id/105/300/300 404
          //  https://picsum.photos/id/150/300/300 404

          image: `https://picsum.photos/id/${i + 1}/300/300`,
          // image: `https://picsum.photos/id/${
          //   i + 1
          // }/${this.getRandomIntInclusive(300, 600)}/300`,

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
