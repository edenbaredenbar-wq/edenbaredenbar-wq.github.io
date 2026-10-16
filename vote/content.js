/* =====================================================================
   ✏️  STARTING CONTENT
   ---------------------------------------------------------------------
   You don't need to edit this file: the ⚙️ Settings screen on the host
   page changes everything below, and remembers your changes on that
   computer. This file is only the starting point (and what
   "Restore defaults" goes back to).

   Round 1 answers: "usa", "israel" or "both".
   Hebrew word fields (he, translit, meaning) are optional.
   ===================================================================== */

const DEFAULT_CONTENT = {

  round1: [
    {
      statement: "You vote for a specific person",
      answer: "usa",
      explain: "Americans vote for a candidate by name. Israelis vote for a party (מפלגה), and the party’s ranked list decides who fills its seats.",
      he: "מפלגה", translit: "miflaga", meaning: "political party"
    },
    {
      statement: "Election day is a national day off",
      answer: "israel",
      explain: "In Israel, election day is a day off so everyone can get to the polls. In the US it’s a normal Tuesday, and most people still go to work or school.",
      he: "בחירות", translit: "bchirot", meaning: "elections"
    },
    {
      statement: "You vote with paper slips marked with letters",
      answer: "israel",
      explain: "Israelis choose a paper slip (פתק) printed with their party’s letters, put it in an envelope, and drop it in the ballot box.",
      he: "פתק", translit: "petek", meaning: "ballot slip (a note)"
    },
    {
      statement: "Two big parties dominate",
      answer: "usa",
      explain: "Democrats and Republicans win almost every seat in Congress and every modern presidential election.",
      he: "", translit: "", meaning: ""
    },
    {
      statement: "Many parties make it into parliament",
      answer: "israel",
      explain: "Israel’s parliament, the Knesset, has 120 seats, and usually around 10 different parties win some of them.",
      he: "כנסת", translit: "Knesset", meaning: "Israel’s parliament"
    },
    {
      statement: "A party needs a minimum % of votes to get any seats",
      answer: "israel",
      explain: "In Israel a party needs at least 3.25% of all votes to enter the Knesset. Below that, it gets zero seats.",
      he: "אחוז החסימה", translit: "achuz ha-chasima", meaning: "the election threshold"
    },
    {
      statement: "The leader is chosen through an Electoral College",
      answer: "usa",
      explain: "Each US state has electors, and a candidate needs 270 of the 538 electoral votes to become president. In Israel, the prime minister is whoever can form a majority in the Knesset.",
      he: "נשיא", translit: "nasi", meaning: "president"
    },
    {
      statement: "Parties must team up (coalition) to form a government",
      answer: "israel",
      explain: "No Israeli party has ever won a majority alone, so parties team up until they have at least 61 of the 120 seats.",
      he: "קואליציה", translit: "koalitzya", meaning: "coalition"
    },
    {
      statement: "Elections can be held early if the government falls",
      answer: "israel",
      explain: "If the coalition falls apart, Israel can hold new elections early. It had five elections between 2019 and 2022!",
      he: "ממשלה", translit: "memshala", meaning: "government"
    },
    {
      statement: "Election day is on a fixed date set by law",
      answer: "usa",
      explain: "US federal elections are always on the Tuesday after the first Monday in November, and they can’t be moved earlier. Israel has a planned date too, but elections often come early.",
      he: "", translit: "", meaning: ""
    },
    {
      statement: "You can vote at 18",
      answer: "both",
      explain: "In both countries, citizens can vote from age 18.",
      he: "להצביע", translit: "lehatzbia", meaning: "to vote"
    },
    {
      statement: "Your vote is secret",
      answer: "both",
      explain: "Both countries use a secret ballot: you vote alone, and nobody can see your choice. Just like this app!",
      he: "קלפי", translit: "kalpi", meaning: "ballot box"
    }
  ],

  round2: {
    topic: "Best fast food chain",
    options: ["McDonald’s", "Chipotle", "Chick-fil-A", "Taco Bell", "Wendy’s", "Panda Express", "Subway"],
    threshold: 10,   // % of the vote a party needs to get any seats (Israel's real one is 3.25%)
    seats: 20        // size of the class "parliament" (Israel's Knesset has 120)
  }
};
