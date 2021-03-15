import { LoremIpsum } from "lorem-ipsum";

  const lorem  = new LoremIpsum({
    sentencesPerParagraph: {
      max: 4,
      min: 4
    },
  });

interface Lorem {
    title: string;
    description: string;
}

 function getMockData(numberOfMocks: number): Lorem[] {
    const mocks: Lorem[] = [];
    for (let i = 0; i < numberOfMocks; i++) {
        mocks.push({title: lorem .generateWords(1), description: lorem .generateSentences()})
    }
    return mocks;
 }

export default getMockData;6