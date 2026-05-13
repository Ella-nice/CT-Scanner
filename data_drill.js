// Переносим тренировочные упражнения и карточки из лога
const drillQuestions = [
    // --- КАРТОЧКИ COLLOCATIONS & PHRASAL VERBS ---
    { id: 101, ruleId: "congratulate_on", text: "The whole team congratulated Billy ... his promotion.", options: ["with", "for", "on", "at"], correctIndex: 2, tutor: "Don't translate directly! 'Congratulate' is ALWAYS followed by ON." },
    { id: 102, ruleId: "verb_patterns_devote", text: "She ... all her free time to learning foreign languages.", options: ["spends", "devotes", "passes", "leaves"], correctIndex: 1, tutor: "Check the preposition! '... TO learning'. Only 'devotes' works with 'TO + -ing'." },
    { id: 103, ruleId: "news_is_police_are", text: "The police ... investigating the robbery right now.", options: ["is", "are", "was", "has been"], correctIndex: 1, tutor: "Unlike Russian, 'Police' in English is ALWAYS plural (they). 'The police ARE'." },
    { id: 104, ruleId: "a_number_of", text: "A growing number of people ... to run a business from home.", options: ["prefers", "prefer", "is preferring", "has preferred"], correctIndex: 1, tutor: "Rule: 'A number of' = many (Plural verb: prefer). 'The number of' = amount (Singular verb: prefers)." },
    { id: 105, ruleId: "so_few_many_that", text: "I've got so ... books that I can keep them all on one small shelf.", options: ["many", "few", "much", "little"], correctIndex: 1, tutor: "Think about the result! If they all fit on ONE small shelf, there are not a lot of them. 'Books' is countable -> FEW." },
    
    // --- ТРЕНИРОВКА ПРИТЯЖАТЕЛЬНОГО ПАДЕЖА ---
    { id: 106, ruleId: "possessive_plural_s", text: "I need to buy a present for my ______ (parents) anniversary.", options: ["parent's", "parents", "parents'", "parents's"], correctIndex: 2, tutor: "Plural ending in -s (parents). Just add an apostrophe at the end: parents'." },
    { id: 107, ruleId: "possessive_else", text: "Is this book yours? No, it must be ______ (somebody/else).", options: ["somebody's else", "somebody else's", "somebody elses", "somebody else"], correctIndex: 1, tutor: "Apostrophe and -s always go at the very end of the phrase: somebody else's." },
    { id: 108, ruleId: "possessive_else", text: "I didn't bring a pen, so I had to borrow ______ (everybody/else).", options: ["everybody's else", "everybody else's", "everybody elses", "everybody else"], correctIndex: 1, tutor: "The rule is strict: always attach 's to the word 'else' -> everybody else's." },
    
    // --- БОЛЬШОЙ ТРЕНИРОВКА НА ПРЕДЛОГИ (ATTITUDE TO / COPE WITH) ---
    { id: 109, ruleId: "attitude_to", text: "His attitude ______ his parents is very respectful.", options: ["with", "for", "to", "about"], correctIndex: 2, tutor: "Attitude always takes TO. Think of it as an arrow pointing to the object." },
    { id: 110, ruleId: "attitude_to", text: "I don't like her attitude ______ me.", options: ["with", "about", "to", "at"], correctIndex: 2, tutor: "Directional rule: attitude TO someone." },
    { id: 111, ruleId: "attitude_to", text: "What's your attitude ______ this problem?", options: ["to", "with", "for", "in"], correctIndex: 0, tutor: "Attitude TO a problem. Never 'with'." },
    { id: 112, ruleId: "attitude_to", text: "She has a positive attitude ______ life.", options: ["with", "about", "to", "of"], correctIndex: 2, tutor: "Attitude TO life is the only right collocation." },
    { id: 113, ruleId: "cope_with", text: "She copes ______ stress remarkably well.", options: ["at", "with", "for", "about"], correctIndex: 1, tutor: "Cope always goes with WITH when dealing with difficulties." },
    
    // --- ТРЕНИРОВКА ПРЕДЛОГОВ ИЗ БАНКА КАРТОЧКОВ ---
    { id: 114, ruleId: "congratulate_on", text: "She thanked me ______ the beautiful flowers.", options: ["on", "with", "for", "about"], correctIndex: 2, tutor: "Careful! Thank someone FOR something (reason). But congratulate someone ON." },
    { id: 115, ruleId: "congratulate_on", text: "They congratulated him ______ winning the race.", options: ["for", "with", "on", "at"], correctIndex: 2, tutor: "Congratulate ON winning. Stand on top of the world!" },
    { id: 116, ruleId: "congratulate_on", text: "I apologize ______ my terrible mistake.", options: ["on", "for", "with", "about"], correctIndex: 1, tutor: "Apologize FOR the mistake (reason/cause)." },
    { id: 117, ruleId: "congratulate_on", text: "He was punished ______ cheating on the exam.", options: ["with", "on", "for", "at"], correctIndex: 2, tutor: "Punish FOR doing something bad." },
    { id: 118, ruleId: "congratulate_on", text: "We congratulated them ______ their 50th wedding anniversary.", options: ["with", "for", "on", "about"], correctIndex: 2, tutor: "Anniversary is a milestone. Congratulate ON it." }
];

,
    // --- ТРЕНИРОВКА ТЕКСТОВЫХ ЛОВУШЕК (READING COMPREHENSION - NOW vs PAST) ---
    { id: 119, ruleId: "reading_now", reading: "I found it very hard to wake up early in my first year of university. For weeks I was late. But gradually my body adjusted, and now I wake up naturally at 6.30 a.m.", text: "What is true about the author NOW?", options: ["He still finds it hard to wake up early.", "He has got used to waking up early.", "He is always late for university."], correctIndex: 1, tutor: "Look for the present! 'But gradually my body adjusted, and now I wake up naturally'. The difficulty is over." },
    { id: 120, ruleId: "reading_now", reading: "When I started learning French, I could not roll my 'r' sound at all. I practised every day, and after a while it became easy.", text: "What is the situation now?", options: ["He still cannot pronounce the French 'r'.", "He can now pronounce the sound without difficulty.", "He gave up practicing French."], correctIndex: 1, tutor: "Chronology trap! 'After a while it became easy' means he can do it now perfectly fine." },
    { id: 121, ruleId: "reading_now", reading: "I used to be terrified of flying. Now I fly at least twice a month for work and I don't feel nervous at all.", text: "How does the author feel about flying now?", options: ["He is still scared of flying.", "He avoids flying for work.", "He no longer feels afraid when flying."], correctIndex: 2, tutor: "The marker 'Now... I don't feel nervous at all' clearly shows the fear is completely gone." },
    { id: 122, ruleId: "reading_now", reading: "At first the new software confused me. I made a lot of mistakes. But I kept using it, and today I can do everything quickly.", text: "What is said about his software skills today?", options: ["He still often gets confused by it.", "He has become proficient with the software.", "He refuses to use the new system."], correctIndex: 1, tutor: "'Today I can do everything quickly' = he became proficient. Focus on the final result." },
    
    // --- ТИПОВЫЕ ТЕКСТОВЫЕ ОБОБЩЕНИЯ (VARIETY OF PLACES) ---
    { id: 123, ruleId: "reading_chronology", reading: "Before becoming a writer, Anna worked as a waitress, a cleaner and a gardener. Only in her forties did she publish her first novel.", text: "What does the text say about Anna's working life?", options: ["She was a writer her whole life.", "She did several different types of work before writing.", "Her first job was in publishing."], correctIndex: 1, tutor: "First jobs were: waitress, cleaner, gardener. This is a classic 'variety of jobs/places' (разнообразие мест/профессий)." },
    { id: 124, ruleId: "reading_chronology", reading: "David started his career as a journalist, then moved to radio, and finally became a television presenter.", text: "What is true about David's career?", options: ["His first job was in television.", "He has worked in more than one area of the media.", "He only worked on the radio."], correctIndex: 1, tutor: "He changed fields: journalism, radio, TV. Syonynm for this is 'more than one area of the media'." },
    { id: 125, ruleId: "reading_different_way", reading: "E-books were supposed to replace printed books entirely. They did change the market, but many readers still prefer the feel of paper, so printed books survive.", text: "What does the author say about printed books?", options: ["Printed books have completely disappeared.", "E-books have not replaced printed books as much as predicted.", "Nobody reads paper books anymore."], correctIndex: 1, tutor: "The text says 'printed books survive'. This matches 'not replaced as much as predicted'." },

    // --- ЛЕКСИЧЕСКИЕ ЛОВУШКИ: ВИЗУАЛЬНО ПОХОЖИЕ СЛОВА ---
    { id: 126, ruleId: "collocations_costume", text: "The old castle had a dark, damp … where prisoners were once held.", options: ["dune", "dung", "dozen", "dungeon"], correctIndex: 3, tutor: "Dungeon — это подземелье/темница. Dune — это дюна, dung — навоз. Не путай похожие буквы!" },
    { id: 127, ruleId: "collocations_costume", text: "The artist carefully mixed the … on her palette before applying it to the canvas.", options: ["pigeons", "piglets", "pigments", "pickets"], correctIndex: 2, tutor: "Художник смешивает пигменты (pigments)! Pigeons — это голуби, piglets — поросята. Включай сканер смысла!" },
    { id: 128, ruleId: "collocations_costume", text: "The … of the new law caused widespread protests across the country.", options: ["passion", "passage", "passive", "package"], correctIndex: 1, tutor: "Принятие/прохождение закона = 'the passage of the law'. Passion — страсть, package — посылка." },
    { id: 129, ruleId: "collocations_costume", text: "The surgeon made a small … in the patient’s skin and carefully inserted the instrument.", options: ["incisor", "incision", "incense", "incentive"], correctIndex: 1, tutor: "Хирургический разрез = 'incision'. Incisor — это передний зуб (резец). Не режь пациента зубом!" },

    // --- ТРЕНИРОВКА КОНСТРУКЦИЙ С ЛИШНИМИ СЛОВАМИ (B8/B15 CONTINUOUS PASSIVE ЛОВУШКИ) ---
    { id: 130, ruleId: "extra_word_being", text: "This bridge is being built in the 18th century. (Find the extra word)", options: ["is", "being", "built", "in"], correctIndex: 1, tutor: "18 век уже давно прошел! Это факт истории, а не процесс сейчас. Должно быть просто 'was built'. Слово 'being' лишнее." },
    { id: 131, ruleId: "extra_word_being", text: "The house which is being located near the park is expensive. (Find the extra word)", options: ["which", "is", "being", "located"], correctIndex: 2, tutor: "Постоянное местоположение дома (is located) пишется без всяких процессов. 'Being' — шпион, убирай!" },
    { id: 132, ruleId: "extra_word_being", text: "The cake is being made by my grandmother every Sunday. (Find the extra word)", options: ["is", "being", "made", "every"], correctIndex: 1, tutor: "Регулярное действие по воскресеньям ('every Sunday') — это Present Simple Passive ('is made'). 'Being' здесь абсолютно лишнее." },

    // === БОЛЬШОЙ МАССИВ ИЗ КАРТОЧЕК 100+ COLLOCATIONS ===
    { id: 133, ruleId: "make_vs_do", text: "We need to make an ... to solve this difficult puzzle.", options: ["homework", "harm", "effort", "business"], correctIndex: 2, tutor: "Приложить усилие = 'MAKE an effort'. С остальными словами из списка используется глагол DO." },
    { id: 134, ruleId: "make_vs_do", text: "Don't worry about the gossip; it won't do any ... to your reputation.", options: ["decision", "harm", "mistake", "money"], correctIndex: 1, tutor: "Причинить вред = 'DO harm'. Запомни эту связку для части Б ЦТ." },
    { id: 135, ruleId: "make_vs_do", text: "The company plans to do ... with several foreign partners next year.", options: ["business", "promise", "money", "friends"], correctIndex: 0, tutor: "Вести бизнес / иметь деловые отношения = 'DO business'." },
    { id: 136, ruleId: "make_vs_do", text: "I want to do my ... on the exam to get the maximum score.", options: ["best", "choice", "discovery", "sure"], correctIndex: 0, tutor: "Сделать всё возможное / выложиться на максимум = 'DO your best'." },
    { id: 137, ruleId: "make_vs_do", text: "It's time to make a ... and choose which university you want to enter.", options: ["sport", "homework", "decision", "harm"], correctIndex: 2, tutor: "Принять решение = 'MAKE a decision'." },
    { id: 138, ruleId: "make_vs_do", text: "We quickly made ... with our new classmates during the first week.", options: ["business", "homework", "friends", "dishes"], correctIndex: 2, tutor: "Подружиться = 'MAKE friends' (создать дружеские связи)." },

    // --- КАРТОЧКИ: СВЯЗКИ С ПРЕДЛОГАМИ ---
    { id: 139, ruleId: "congratulate_on", text: "Are you aware ... the changes in the exam rules?", options: ["in", "of", "for", "with"], correctIndex: 1, tutor: "Быть в курсе / осознавать = 'be aware OF'. Запомни этот предлог." },
    { id: 140, ruleId: "congratulate_on", text: "Who is responsible ... organising the graduation party?", options: ["to", "about", "with", "for"], correctIndex: 3, tutor: "Быть ответственным ЗА что-то = 'be responsible FOR'." },
    { id: 141, ruleId: "congratulate_on", text: "Her dress is very similar ... the one I bought yesterday.", options: ["with", "to", "like", "as"], correctIndex: 1, tutor: "Похожий на что-то = 'be similar TO'. Не путай с русским предлогом!" },
    { id: 142, ruleId: "congratulate_on", text: "I am deeply disappointed ... the results of the test.", options: ["with", "of", "to", "for"], correctIndex: 0, tutor: "Быть разочарованным чем-то = 'be disappointed WITH' (или by)." },
    { id: 143, ruleId: "congratulate_on", text: "The annual sports festival will take ... in the central stadium.", options: ["action", "notes", "part", "place"], correctIndex: 3, tutor: "Происходить / иметь место = 'take PLACE'. ('Take part' — это участвовать)." },
    { id: 144, ruleId: "congratulate_on", text: "You should take ... of this unique opportunity to study abroad.", options: ["care", "action", "advantage", "risk"], correctIndex: 2, tutor: "Воспользоваться чем-то / извлечь выгоду = 'take advantage OF'." },
    { id: 145, ruleId: "congratulate_on", text: "I have get ... to waking up early because of my morning classes.", options: ["used", "rid", "touch", "permission"], correctIndex: 0, tutor: "Привыкнуть к чему-то = 'get USED to'. Действие вошло в привычку." },
    { id: 146, ruleId: "congratulate_on", text: "We must run a ... to check if the new program works correctly.", options: ["business", "test", "trouble", "time"], correctIndex: 1, tutor: "Провести тест / запустить проверку = 'run a TEST'." },
    { id: 147, ruleId: "congratulate_on", text: "If you break the ..., you will have to pay a very heavy fine.", options: ["habit", "rules", "law", "promise"], correctIndex: 2, tutor: "Нарушить закон = 'break the LAW'. (Нарушить правила — break the rules, но штраф платят за закон)." }

// Автоматически добавляем эти тренировочные вопросы в общую базу при загрузке страницы
questionsData.push(...drillQuestions);

// Обновляем веса правил, чтобы новые вопросы тоже крутились в рулетке
drillQuestions.forEach(q => {
    if (!rulesWeight[q.ruleId]) {
        rulesWeight[q.ruleId] = 1;
    }
});