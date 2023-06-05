//this object records the participant data

import { knowledgeFirst } from "./gameParameters";

const Data = {
  //the participant's Prolific ID
  prolificId: [],
  //the attention check during the instructions trial
  attnCheck: [],
  //the comprehension questions
  precomprehension: [],
  comprehension: [],
  //the participants' answers during the familiarization phase
  familiarization: [],
  //the participant's answers to the knowledge question
  knowledgeResponses: [],
  //the participant's answers to the belief question
  beliefResponses: [],
  //the number of alpha balls drawn
  nalphadrawn: [],
  //the number of beta balls drawn
  nbetadrawn: [],
  //the number of white balls drawn
  nwhitedrawn: [],
  //whether the box contains alpha
  containsAlpha: [],
  //the test number
  testNumber: [],
  //the ordering (whether knowledge question comes first)
  knowledgeFirst: knowledgeFirst,
  //the free-form comment about how people made their guesses
  freeComment: [],
  //the answers to demographic questions
  demographics: []
};

export default Data;