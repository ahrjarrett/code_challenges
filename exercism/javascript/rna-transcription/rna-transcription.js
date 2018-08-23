function DnaTranscriber() {}

const transcriptions = { 'C' : 'G'
  , 'G' : 'C'
  , 'A' : 'U'
  , 'T' : 'A'
}

// transcribe : String -> String
const transcribe = (nucleotide) => transcriptions[nucleotide]

const validateStrand = (strand) => {
  if(!transcribe(strand)) throw new Error('Invalid input')
  else return strand
}

DnaTranscriber.prototype.toRna = (strand) =>
  strand.split('')
  .map(validateStrand)
  .map(transcribe)
  .join('')

module.exports = DnaTranscriber
