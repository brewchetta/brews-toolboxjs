import { numWord } from './numWord'
import { nthNumWord } from './nthNumWord'

// Testers (but not actual tests until I implement node)

// numWord Test
function parseAllNumbers(m,n) {
  console.log('---Parse All Numbers to Words---')

  for (let i = m; i < n; i++) {
    console.log(numWord(i))
  }

  console.log('---END Parse All Numbers to Words---')
}

// nthNumWord Test
function parseAllNthNumbers(m,n) {
  console.log('---Parse All Nth Numbers---')

  for (let i = m; i < n; i++) {
    console.log(nthNumWord(i))
  }

  console.log('---END Parse All Nth Numbers---')
}

// Run these tests
parseAllNumbers(1,20)
parseAllNthNumbers(1,20)
