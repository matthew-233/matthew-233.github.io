export const WORDS = [
    'longday',
    'samosas',
    'mommish',
    'dessert',
    'grandma',
    'naptime',
    'pumpkin',
    'chescak',
    'garbage',
    'gbicday',
    'mimosas',
    'coconut',
    'avocado',
    'baileys',
    'bananas',
    'pitbull',
    'grandpa',
    'chicken',
    'weekend',
    'lottery',
    'nodream',
    'walmart',
    'youtube',
    'chimmas',
    'valerie',
    'juwanna',
    'brisket',
    'padthai',
    'sandals',
    'flowers',
    'pillows',
    'teacher',
    'working',
    'thought',
    'workout',
    'burrito',
    'bedtime',
    'pancake',
    'laundry',
    'glasses',
    'eyebrow',
    'netflix',
    'weather',
    'slushie',
    'westsac',
    'bikedog'

 ];


 const createList = async function (text) {
    // Read the list of words from a file
    const response = await fetch(text);
    const words = await response.text();
    return words.split(/\r\n|\n/);
  }

const myList = createList;

export const REALWORDS = await myList("./realwords.txt");