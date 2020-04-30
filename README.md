# Brew's Toolbox.js

This little toolbox has reusable code for different projects. No, they aren't yet highly developed or efficient algorithms but I like them anyhow. This is mostly for me to add code to other projects but it's obviously available for anyone to copy and use.

### capitalizeWords()

Takes in a word or words and returns them capitalized. For example:

`capitalizeWords("good morning") => Good Morning`

### compareAlphabetical() / sortAlphabetical()

The compare function takes in two values and attempts to sort them alphabetically.

`compareAlphabetical("alpha", "beta") => 1`
`compareAlphabetical("beta", "alpha") => -1`
`compareAlphabetical("beta", "beta") => 0`

The sort function takes in an array and attempts to return a new alphabetized array. For example:

`sortAlphabetical(["alpha", "gamma", "beta"])` => ["alpha", "beta", "gamma"]

This sort function is non-destructive.

### isALetter() / isAConsonant() / isAVowel()

A few simple ones that return true or false if a single string character is a letter, consonant, or vowel. For example:

`isALetter("a") => true`

`isAConsonant("a") => false`

`isAConsonant("b") => true`

`isAVowel("a") => true`

`isAVowel("b") => false`

### numWord()

This takes in a positive integer and spits out the corresponding word. For example:

`numWord(1) => "one"`

### nthNumWord()

Similar to numWord(), nthNumWord() takes in a positive integer and spits out the word in its nth form, for example:

`nthNumWord(10) => "tenth"`

### random()

Takes in an array, an object or string and returns a random element from it. For example:

`random([1, 2, 3, 4, 5]) => 2`

`random({1: "a", 2: "b", 3: "c", 4: "d", 5: "e"}) => {3: "c"}`

`random("panda") => "n"`

Many of these functions have been built to render error messages on the console if an incorrect argument gets passed in, however they won't throw errors themselves.

### stringToColor()

Takes in an argument of a string and converts that string to a hexadecimal color code. For example:

`stringToColor('I am a string') => "#cd14fb"`

## npm

I've added this as an npm package just for the fun of it. It can be added to a project by running:

`$ npm install brews-toolboxjs`

Once added, import functions to your local file like so:

`import {random, isALetter, sortAlphabetical} from 'brews-toolboxjs'`

You can also import the entire toolbox for use:

`import toolbox from 'brews-toolboxjs'`

`toolbox.isALetter("a") => true`

### Version

1.0.18
