const questionsData = [
    // === 1. ВРЕМЕНА И ПАССИВ (TENSES & PASSIVE) ===
    {
        id: 1, ruleId: "past_simple_date",
        text: "In 2010, a huge earthquake ... Haiti, causing the deaths of over a hundred thousand people.",
        options: ["has hit", "was hit", "hit", "has been hitting"],
        correctIndex: 2,
        tutor: "Мертвая дата! 'In 2010' — это маркер Past Simple. Землетрясение само ударило (актив), поэтому просто 'hit'. Никакого Present Perfect."
    },
    {
        id: 2, ruleId: "past_simple_date",
        text: "In the 1960s, Don Hunt … a conservation programme.",
        options: ["has started", "started", "was started", "had started"],
        correctIndex: 1,
        tutor: "Снова мертвая дата 'In the 1960s'. Время прошло. Используем только Past Simple (started)."
    },
    {
        id: 3, ruleId: "past_perfect_by",
        text: "By the age of 10 Springsteen ... his first band.",
        options: ["was joined", "joined", "had joined", "has joined"],
        correctIndex: 2,
        tutor: "Смотри на 'By the age of 10' (К 10 годам). Предлог BY + время в прошлом = Past Perfect (had joined). Действие завершилось ДО этого момента."
    },
    {
        id: 4, ruleId: "present_perfect_since",
        text: "Since then, I ... part in Go competitions all over the country.",
        options: ["am taken", "was taking", "have taken", "will be taken"],
        correctIndex: 2,
        tutor: "Слово 'Since' (с тех пор) — главный строитель мостов из прошлого в настоящее! Это 100% Present Perfect (have taken). Активный залог!"
    },
    {
        id: 5, ruleId: "past_continuous_background",
        text: "I ... in front of the new class. It was full of children. I didn’t know anyone.",
        options: ["will stand", "have been standing", "have stood", "was standing"],
        correctIndex: 3,
        tutor: "Ты рассказываешь историю. Ты стоял перед классом какое-то время, это процесс в прошлом, фон для других событий. Нужен Past Continuous (was standing)."
    },
    {
        id: 6, ruleId: "sequence_of_tenses",
        text: "Later, the woman said that she and her family ... the dog.",
        options: ["have adopted", "adopted", "will adopt", "would adopt"],
        correctIndex: 3,
        tutor: "Согласование времен! Она 'сказала' (said - Past). Значит 'усыновят' (будущее в прошлом) превращается из will в WOULD."
    },
    {
        id: 7, ruleId: "passive_bring_up",
        text: "Its inventor, Hans Beck, was ... up in Greiz, Germany.",
        options: ["risen", "grown", "brought", "cared"],
        correctIndex: 2,
        tutor: "Ловушка! 'Grow up' (расти самому) не имеет пассива. Если человека 'воспитали' (was ___ up), это только 'brought up'."
    },

    // === 2. ПРЕДЛОГИ И ФРАЗОВЫЕ ГЛАГОЛЫ (PREPOSITIONS) ===
    {
        id: 8, ruleId: "congratulate_on",
        text: "I must congratulate Billy ... passing his exams.",
        options: ["for", "on", "with", "about"],
        correctIndex: 1,
        tutor: "Забудь русский перевод! Congratulate ВСЕГДА идет с предлогом ON. Ты НА вершине успеха!"
    },
    {
        id: 9, ruleId: "crazy_about",
        text: "Both my sons are crazy ... old motorbikes.",
        options: ["for", "with", "about", "of"],
        correctIndex: 2,
        tutor: "Хобби и увлечения! Crazy ABOUT, mad ABOUT, excited ABOUT. Предлог 'for' тут не работает."
    },
    {
        id: 10, ruleId: "pride_on",
        text: "The restaurant prides itself ... having the best pizza in town.",
        options: ["in", "of", "with", "on"],
        correctIndex: 3,
        tutor: "Три формулы гордости: pride oneself ON, take pride IN, be proud OF. Здесь глагол + itself, значит ON!"
    },
    {
        id: 11, ruleId: "devote_to",
        text: "Hans ... several years to developing his ideas.",
        options: ["passed", "spent", "devoted", "left"],
        correctIndex: 2,
        tutor: "Смотри вправо! Там 'TO developing'. Глагол 'spend' требует 'ON', а вот 'devote' требует 'TO + -ing'."
    },
    {
        id: 12, ruleId: "cope_with",
        text: "Residents find it increasingly difficult to ... with the 22 million visitors.",
        options: ["handle", "manage", "cope", "accept"],
        correctIndex: 2,
        tutor: "Предлог WITH выдает ответ с головой! 'Handle' и 'manage' идут без предлога. 'Cope with' = справляться с."
    },
    {
        id: 13, ruleId: "take_up",
        text: "So why take ... photography?",
        options: ["in", "over", "on", "up"],
        correctIndex: 3,
        tutor: "Начать заниматься новым хобби — это фразовый глагол 'take up'. 'Take on' — это взять ответственность."
    },
    {
        id: 14, ruleId: "keep_to",
        text: "Trying to ... to the timetable when the traffic is heavy isn't easy.",
        options: ["check", "notice", "keep", "carry"],
        correctIndex: 2,
        tutor: "Фразовый глагол! 'Придерживаться расписания' = 'keep to the timetable' (или stick to). 'Notice to' не существует в природе."
    },

    // === 3. ЛЕКСИКА И УСТОЙЧИВЫЕ ВЫРАЖЕНИЯ (COLLOCATIONS) ===
    {
        id: 15, ruleId: "make_vs_do",
        text: "Sam is ... excellent progress as a doctor.",
        options: ["doing", "making", "having", "taking"],
        correctIndex: 1,
        tutor: "Прогресс мы 'создаем' (результат). Устойчивое выражение — MAKE progress. Забудь про 'do' здесь!"
    },
    {
        id: 16, ruleId: "make_vs_do_research",
        text: "Scientists are ... a lot of research in this area.",
        options: ["making", "doing", "having", "building"],
        correctIndex: 1,
        tutor: "А вот исследование (research) — это рутинная работа и процесс. Поэтому DO research или CONDUCT research. Не 'make'!"
    },
    {
        id: 17, ruleId: "make_appointment_fuss",
        text: "I can't ... an appointment today. / Don't ... a fuss about it.",
        options: ["do", "have", "take", "make"],
        correctIndex: 3,
        tutor: "Назначить встречу = MAKE an appointment. Поднять шум/суету = MAKE a fuss. Глагол 'have' во втором случае не работает."
    },
    {
        id: 18, ruleId: "collocations_costume",
        text: "Oscars are awarded to top professionals, including actors, writers and ... designers.",
        options: ["coast", "sweet", "costume", "custom"],
        correctIndex: 2,
        tutor: "Не ведись на внешнее сходство! В кино работают художники по костюмам — 'costume designers'. Coast — это побережье."
    },
    {
        id: 19, ruleId: "collocations_check",
        text: "If you fly, you can always ... the length of the runway first.",
        options: ["examine", "observe", "control", "check"],
        correctIndex: 3,
        tutor: "Быстро убедиться или посмотреть информацию — это CHECK. Examine — это глубоко исследовать (как врач пациента)."
    },

    // === 4. АРТИКЛИ (ARTICLES) ===
    {
        id: 20, ruleId: "geography_articles",
        text: "They are planning an expedition to ... Andes and ... Pacific Ocean.",
        options: ["-, the", "the, -", "the, the", "-, -"],
        correctIndex: 2,
        tutor: "География! Цепи гор (Andes - множественное число) и любая вода (Pacific Ocean) всегда требуют артикля THE."
    },
    {
        id: 21, ruleId: "geography_islands",
        text: "... Corsica is a large island in ... Mediterranean Sea.",
        options: ["The, the", "-, the", "The, -", "-, -"],
        correctIndex: 1,
        tutor: "Одинокий остров (Corsica) пишется БЕЗ артикля. А вот море (Mediterranean) — это вода, всегда с THE."
    },
    {
        id: 22, ruleId: "unique_roles",
        text: "The chef started his campaign by meeting with ... prime minister.",
        options: ["a", "-", "the", "an"],
        correctIndex: 2,
        tutor: "Уникальная должность! В стране только один премьер-министр в данный момент. Обязательно THE."
    },

    // === 5. ГРАММАТИЧЕСКИЕ ЛОВУШКИ (GRAMMAR TRAPS) ===
    {
        id: 23, ruleId: "a_number_of",
        text: "A growing number of people ... to run a business from home.",
        options: ["prefers", "is preferring", "prefer", "has preferred"],
        correctIndex: 2,
        tutor: "Правило: 'A number of' = много (глагол во МН. числе: prefer). А вот 'THE number of' = количество (глагол в ЕД. числе)."
    },
    {
        id: 24, ruleId: "news_is",
        text: "The news ... shared on social media by individuals nowadays.",
        options: ["are", "were", "have been", "is"],
        correctIndex: 3,
        tutor: "Не дай букве 's' обмануть тебя! News, physics, maths — это единственное число. 'The news IS'."
    },
    {
        id: 25, ruleId: "police_are",
        text: "The police ... investigating the robbery right now.",
        options: ["is", "was", "has been", "are"],
        correctIndex: 3,
        tutor: "Слово Police в английском — это ВСЕГДА ОНИ (they). Множественное число. 'The police ARE'."
    },
    {
        id: 26, ruleId: "so_few_that",
        text: "Walking burns so ... calories that I think I should join a gym.",
        options: ["many", "little", "much", "few"],
        correctIndex: 3,
        tutor: "Логика! Если надо идти в зал, значит калорий сжигается МАЛО. Calories — исчисляемое (с 's'), поэтому FEW."
    },
    {
        id: 27, ruleId: "so_few_that_2",
        text: "I've got so ... books that I can keep them on one shelf.",
        options: ["many", "much", "little", "few"],
        correctIndex: 3,
        tutor: "Вмещаются на ОДНУ полку? Значит их мало! Книги исчисляемые, берем FEW."
    },
    {
        id: 28, ruleId: "neither_two",
        text: "The two candidates applied for the post, but ... of them had the necessary qualifications.",
        options: ["none", "no one", "neither", "any"],
        correctIndex: 2,
        tutor: "Кандидатов было ДВОЕ (two). Когда мы говорим 'ни один из двух', мы используем NEITHER. 'None' — это для трех и более."
    },
    {
        id: 29, ruleId: "someone_elses",
        text: "Don't make the mistake of simply reporting ... words.",
        options: ["someone's else", "someone else's", "someones else", "someone elses"],
        correctIndex: 1,
        tutor: "Притяжательный падеж с 'else'. Апостроф и 's' всегда цепляются за самое последнее слово в связке: someone else's."
    },

    // === 6. ЛИШНИЕ СЛОВА И СЛОВООБРАЗОВАНИЕ ===
    {
        id: 30, ruleId: "word_formation_verb",
        text: "Digital photography makes it easy to ... (LARGE) pictures.",
        options: ["enlargen", "large", "enlarge", "larger"],
        correctIndex: 2,
        tutor: "Не создавай Франкенштейнов! Глагол от 'large' делается только приставкой EN- (enlarge). Двойной суффикс 'enlargen' — ошибка."
    },
    {
        id: 31, ruleId: "look_angrily",
        text: "Peter looked very ... (ANGRY) at the person who had interrupted him.",
        options: ["angry", "angered", "angriness", "angrily"],
        correctIndex: 3,
        tutor: "Здесь 'look' = смотреть (есть предлог 'at'). Это действие! А действие описывается наречием на -LY: looked angrily."
    },
    {
        id: 32, ruleId: "which_vs_that",
        text: "More than 22 million tourists visit Venice, ... is good for business.",
        options: ["it", "what", "which", "that"],
        correctIndex: 2,
        tutor: "Запятая выдает ответ! Если нужно сослаться на ВСЮ предыдущую ситуацию через запятую, используем 'which' (и это)."
    },

    // === 7. READING COMPREHENSION (ПОНИМАНИЕ ТЕКСТА) ===
    {
        id: 33, ruleId: "reading_has_just",
        reading: "Glancing down at the screen, I see that yet again my face is all over social media. This time eating a sandwich. In fact, wolfing down a sandwich as I'm starving after a football match.",
        text: "In paragraph 1, we learn that the writer has just...",
        options: ["eaten a sandwich after a football match.", "come across an image of himself.", "taken and uploaded a picture online."],
        correctIndex: 1,
        tutor: "Ищи действие в настоящем! 'I see that yet again...' Он ТОЛЬКО ЧТО увидел фото (come across an image). Ел сэндвич он в прошлом."
    },
    {
        id: 34, ruleId: "reading_now",
        reading: "We also correct mistakes in people's articles, which we all had to get used to, but we were soon doing it without thinking.",
        text: "What does Michael say about his role on the newspaper NOW?",
        options: ["He feels uncomfortable correcting work.", "He still needs to improve.", "He's become better at making articles accurate."],
        correctIndex: 2,
        tutor: "Смотри на 'but we were soon doing it without thinking'. Трудность осталась в прошлом! Сейчас он делает это легко (стал лучше)."
    },
    {
        id: 35, ruleId: "reading_contradiction",
        reading: "The four-day Championships have taken place every year since 1910. The competitors take it very seriously, and they all want to win.",
        text: "What is said about the Championships?",
        options: ["Young athletes take part just to have fun.", "Thirty thousand people watch them on TV.", "They started over 100 years ago."],
        correctIndex: 2,
        tutor: "Опирайся только на text! 'Since 1910' = более 100 лет назад. 'Just to have fun' противоречит тексту (там 'take it very seriously')."
    },

    // === ПОРЦИЯ 2: ДОПОЛНИТЕЛЬНЫЕ ВОПРОСЫ ===
    {
        id: 36, ruleId: "pronoun_two",
        text: "Are ... of you two interested in coming with me?",
        options: ["either", "none", "any", "anybody"],
        correctIndex: 0,
        tutor: "Лайфхак: видишь 'two' (из вас двоих) — используй 'either' (кто-то из двух) или 'neither' (ни один). 'Any' и 'none' — это для трех и более!"
    },
    {
        id: 37, ruleId: "phrasal_connect",
        text: "Over time, the animals learned to ... getting food with the photograph.",
        options: ["attach", "tie", "connect", "adapt"],
        correctIndex: 2,
        tutor: "Связать в уме одно с другим = 'connect A with B'. Глагол 'adapt' (адаптироваться) требует предлога 'to', а не 'with'."
    },
    {
        id: 38, ruleId: "phrasal_look_up",
        text: "I don't know the translation. I need to look ... this word in the dictionary.",
        options: ["for", "up", "after", "at"],
        correctIndex: 1,
        tutor: "Искать слово в словаре или информацию в интернете — это 'look UP'. ('Look for' — это искать потерянную вещь)."
    },
    {
        id: 39, ruleId: "phrasal_put_off",
        text: "Don't put ... doing your homework until the last minute.",
        options: ["up", "on", "off", "out"],
        correctIndex: 2,
        tutor: "Откладывать на потом = 'put OFF' (звучит как 'выключить' энтузиазм)."
    },
    {
        id: 40, ruleId: "phrasal_take_after",
        text: "She takes ... her mother; they have the exact same smile.",
        options: ["over", "up", "after", "in"],
        correctIndex: 2,
        tutor: "Быть похожим на родственника = 'take AFTER' (пойти в кого-то)."
    },
    {
        id: 41, ruleId: "phrasal_give_up",
        text: "He gave ... smoking last year for health reasons.",
        options: ["out", "in", "up", "away"],
        correctIndex: 2,
        tutor: "Бросить привычку или сдаться = 'give UP'."
    },
    {
        id: 42, ruleId: "past_perfect_because",
        text: "I couldn't get into my apartment because I ... my keys at work.",
        options: ["have left", "had left", "was leaving", "left"],
        correctIndex: 1,
        tutor: "Два действия в прошлом. Ты не мог попасть в квартиру (Past), потому что ДО ЭТОГО оставил ключи (Past Perfect = had left)."
    },
    {
        id: 43, ruleId: "present_perfect_still",
        text: "She ... in this company for ten years, and she still loves it.",
        options: ["worked", "had worked", "has worked", "was working"],
        correctIndex: 2,
        tutor: "Смотри на 'and she still loves it'! Связь с настоящим жива. Действие началось в прошлом и длится сейчас — Present Perfect (has worked)."
    },
    {
        id: 44, ruleId: "past_cont_when",
        text: "He ... a shower when the phone rang.",
        options: ["had", "has had", "was having", "had had"],
        correctIndex: 2,
        tutor: "Короткое действие (телефон зазвонил) прервало длинный процесс (он принимал душ). Процесс в прошлом = Past Continuous (was having)."
    },
    {
        id: 45, ruleId: "past_perfect_by_time",
        text: "They ... already ... dinner by the time we arrived.",
        options: ["have... finished", "were... finishing", "had... finished", "did... finish"],
        correctIndex: 2,
        tutor: "Маркер 'by the time' (к тому моменту в прошлом) + 'already' = 100% Past Perfect (had finished). Они закончили ДО нашего прихода."
    },
    {
        id: 46, ruleId: "present_perfect_this_month",
        text: "I ... that movie three times this month.",
        options: ["saw", "had seen", "was seeing", "have seen"],
        correctIndex: 3,
        tutor: "Месяц еще не закончился ('this month')! Результат актуален сейчас. Present Perfect (have seen)."
    },
    {
        id: 47, ruleId: "present_perfect_best",
        text: "It's the best book I ... ever ... .",
        options: ["had... read", "have... read", "was... reading", "did... read"],
        correctIndex: 1,
        tutor: "Конструкция 'It is the best [что-то], что я когда-либо делал' ВСЕГДА требует Present Perfect (have read)."
    },
    {
        id: 48, ruleId: "past_simple_fact",
        text: "Designed by Renzo Piano, the Shard ... the tallest building in Europe when construction work was completed in 2012.",
        options: ["was becoming", "had become", "became", "has become"],
        correctIndex: 2,
        tutor: "Есть конкретный момент в прошлом ('when... was completed in 2012'). Это простая констатация факта. Past Simple (became)."
    },
    {
        id: 49, ruleId: "possessive_plural_s",
        text: "All the ... projects were submitted on time.",
        options: ["student's", "students'", "students", "students's"],
        correctIndex: 1,
        tutor: "Проекты студентов (множественное число). Если слово уже кончается на -s (students), мы просто ставим апостроф в конце: students'."
    },
    {
        id: 50, ruleId: "possessive_irregular",
        text: "The ... room is at the end of the hall.",
        options: ["childrens'", "childrens", "children's", "children'"],
        correctIndex: 2,
        tutor: "Слово 'children' — это УЖЕ множественное число (дети), оно не кончается на -s. Поэтому падеж строится по классике: + 's (children's)."
    },
    {
        id: 51, ruleId: "possessive_else",
        text: "We need to respect ... opinions, even if we disagree.",
        options: ["everyone's else", "everyone else's", "everyones else's", "everyone elses'"],
        correctIndex: 1,
        tutor: "Слова с 'else'. Апостроф ВСЕГДА лепится к самому последнему слову в хвосте: everyone else's."
    },
    {
        id: 52, ruleId: "make_do_favour",
        text: "Could you ... me a favour and water my plants?",
        options: ["make", "have", "do", "take"],
        correctIndex: 2,
        tutor: "Оказать услугу / сделать одолжение = устойчивое выражение 'DO a favour'."
    },
    {
        id: 53, ruleId: "make_do_call",
        text: "I need to ... a phone call before we leave.",
        options: ["do", "perform", "make", "take"],
        correctIndex: 2,
        tutor: "Сделать звонок (создать его) = 'MAKE a phone call'."
    },
    {
        id: 54, ruleId: "make_do_homework",
        text: "Don't forget to ... your homework before playing games.",
        options: ["make", "do", "write", "create"],
        correctIndex: 1,
        tutor: "Рутинная работа, учеба, обязанности — это всегда DO (do homework, do the dishes, do research)."
    },
    {
        id: 55, ruleId: "article_unique_award",
        text: "A boy from Texas is eligible for ... award of the most creative cheat.",
        options: ["an", "-", "the", "a"],
        correctIndex: 2,
        tutor: "Это не просто 'какая-то награда' (an). Дальше идет уточнение 'of the most creative cheat'. Она уникальна и конкретна! Нужен 'the'."
    },
    {
        id: 56, ruleId: "article_general_type",
        text: "Of course, he is no longer allowed to sit by ... window in exams!",
        options: ["the", "-", "an", "a"],
        correctIndex: 3,
        tutor: "Ему запретили сидеть у окна ВООБЩЕ (у любого окна на экзамене как типа места), а не у того конкретного. Поэтому 'a window'."
    },
    {
        id: 57, ruleId: "word_formation_competitors",
        text: "In free-diving there are no ... (COMPETE) around you.",
        options: ["competition", "competitive", "competitions", "competitors"],
        correctIndex: 3,
        tutor: "Вокруг тебя физически не может находиться 'соревнование' (competition). Вокруг могут быть только ЛЮДИ — соперники (competitors)."
    },

    // === ПОРЦИЯ 3: ОХОТА НА ЛИШНИЕ СЛОВА И АРТИКЛИ ===
    {
        id: 58, ruleId: "extra_word_enough",
        text: "Now it is so enough famous that it even has a name, Hyperion. (Find the extra word)",
        options: ["so", "enough", "famous", "even"],
        correctIndex: 1,
        tutor: "Конструкция 'so ... that' (настолько... что) не терпит конкурентов! Слово 'enough' здесь ломает структуру и является лишним."
    },
    {
        id: 59, ruleId: "extra_word_being",
        text: "It is being situated at one of the dead ends which back onto Dunlow Park. (Find the extra word)",
        options: ["being", "situated", "which", "onto"],
        correctIndex: 0,
        tutor: "Местоположение дома — это постоянный факт, а не процесс прямо сейчас! Нужен обычный Present Simple Passive ('is situated'). 'Being' — лишнее."
    },
    {
        id: 60, ruleId: "extra_word_either",
        text: "It could be better targeted at saving the many more that are currently endangered either. (Find the extra word)",
        options: ["better", "many", "currently", "either"],
        correctIndex: 3,
        tutor: "Слово 'either' в конце предложения ставится ТОЛЬКО при отрицании (тоже не). Здесь отрицания нет, предложение позитивное. 'Either' — в мусорку!"
    },
    {
        id: 61, ruleId: "extra_word_are",
        text: "If we are delay getting up, we will miss the train. (Find the extra word)",
        options: ["are", "delay", "getting", "will"],
        correctIndex: 0,
        tutor: "Правило одного короля! 'Delay' — это глагол (мы откладываем). Глаголу действия не нужен помощник 'are' (глагол состояния)."
    },
    {
        id: 62, ruleId: "attitude_to",
        text: "We are also worried about our parents' attitude ... the clothes we purchase.",
        options: ["with", "for", "about", "to"],
        correctIndex: 3,
        tutor: "Стрелка направленности! Отношение К чему-то — это всегда 'attitude TO' (или towards). 'Attitude with' — это жесткая калька с русского."
    },
    {
        id: 63, ruleId: "in_the_hope_of",
        text: "He went to the library in the ... of finding a quiet place to study.",
        options: ["search", "hope", "wish", "desire"],
        correctIndex: 1,
        tutor: "Устойчивая фраза! 'In the HOPE of' идет с артиклем the. А вот фраза 'in search of' пишется БЕЗ артикля."
    },
    {
        id: 64, ruleId: "keep_to_timetable",
        text: "Trying to ... to the timetable when the traffic is heavy isn't easy.",
        options: ["notice", "check", "keep", "carry"],
        correctIndex: 2,
        tutor: "Соблюдать график/расписание = 'KEEP to the timetable' (или stick to). 'Notice to' не существует в природе."
    },
    {
        id: 65, ruleId: "make_a_fuss",
        text: "I can't ... an appointment today. / Don't ... such a fuss about a silly problem.",
        options: ["have", "do", "take", "make"],
        correctIndex: 3,
        tutor: "Ищи слово, которое подходит в ОБА пропуска. Назначить встречу = MAKE an appointment. Поднять шум/суету = MAKE a fuss. Глагол 'have' во втором случае не работает."
    },
    {
        id: 66, ruleId: "recent_study_of",
        text: "A recent ... of centenarians found that many had led unhealthy lifestyles.",
        options: ["research", "finding", "study", "proof"],
        correctIndex: 2,
        tutor: "Если стоит предлог OF (исследование кого-то конкретного), мы используем 'STUDY of'. Слово 'research' обычно идет с предлогами 'on/into' или вообще без них."
    },
    {
        id: 67, ruleId: "make_someone_do",
        text: "Research has shown that by ... people imagine they are younger, ageing goes into reverse.",
        options: ["getting", "forcing", "allowing", "making"],
        correctIndex: 3,
        tutor: "Смотри на глагол дальше: 'imagine' стоит БЕЗ частицы 'to'. Из всех вариантов только 'MAKING people imagine' (заставляя их) не требует 'to'. ('Getting' требует 'to imagine')."
    },
    {
        id: 68, ruleId: "article_distance",
        text: "As we walked across the fields to watch the waterfall, we could see it in ... distance.",
        options: ["a", "-", "the", "some"],
        correctIndex: 2,
        tutor: "Устойчивое выражение! 'Вдалеке / на расстоянии' = ВСЕГДА 'in THE distance'."
    },
    {
        id: 69, ruleId: "article_countryside",
        text: "My family decided to visit a waterfall in ... countryside near our town.",
        options: ["a", "-", "the", "some"],
        correctIndex: 2,
        tutor: "Уникальные ландшафты! Сельская местность ('countryside'), горы, побережье — всегда требуют определенного артикля 'THE'."
    },
    {
        id: 70, ruleId: "article_transport_system",
        text: "It is better to take ... bus instead of asking for a lift.",
        options: ["a", "-", "the", "some"],
        correctIndex: 2,
        tutor: "Когда мы говорим об использовании транспорта как СИСТЕМЫ (ездить на автобусе в целом), мы говорим 'take THE bus', 'take THE train'."
    },
    {
        id: 71, ruleId: "article_on_the_whole",
        text: "The trip was difficult, but on ... whole, we enjoyed it.",
        options: ["a", "-", "the", "some"],
        correctIndex: 2,
        tutor: "Неделимая фраза! 'В общем и целом' = 'on THE whole'. Заучить как таблицу умножения."
    },
    {
        id: 72, ruleId: "active_vs_passive_form",
        text: "The kilt ... part of the traditional Highland dress.",
        options: ["forms", "is formed", "was formed", "will be formed"],
        correctIndex: 0,
        tutor: "Килт 'составляет' часть костюма (является ею). Это постоянный факт в настоящем времени и активный залог. Правильно: 'forms'."
    },
    {
        id: 73, ruleId: "parallelism_passive",
        text: "The most successful movies are directed by famous people and lots of money ... spent on advertising them.",
        options: ["to", "are", "was", "is"],
        correctIndex: 3,
        tutor: "Два правила сразу! 1) Параллелизм: до 'and' был пассив, значит и после 'and' пассив. 2) 'Money' — неисчисляемое, поэтому единственное число: 'IS spent'."
    },
    {
        id: 74, ruleId: "present_continuous_state",
        text: "Like any farmer in his village, Ngoc ... a busy life with pigs, hens and his business.",
        options: ["led", "was led", "has led", "is leading"],
        correctIndex: 3,
        tutor: "Описание текущего образа жизни, актуального прямо сейчас. Раз нет Present Simple в вариантов, берем Present Continuous для описания текущего периода: 'is leading a busy life'."
    },
    {
        id: 75, ruleId: "past_simple_date_apple",
        text: "It all started in 2001 when the American technology company Apple ... the iPod.",
        options: ["was launched", "has launched", "launched", "had launched"],
        correctIndex: 2,
        tutor: "Точная мертвая дата 'in 2001'. Значит только Past Simple. Apple сама запустила продукт (актив), поэтому просто 'launched'."
    },
    {
        id: 76, ruleId: "past_simple_passive_date",
        text: "iTunes ... in 2003 and by the end of 2004 it had 200 million downloads.",
        options: ["launched", "had launched", "was launched", "has launched"],
        correctIndex: 2,
        tutor: "Точная дата 'in 2003' = Past Simple. Но iTunes не сам себя запустил, его запустили программисты! Значит нужен пассивный залог: 'was launched'."
    },
    {
        id: 77, ruleId: "reading_different_way",
        reading: "We communicate more through screens and texts. I spend less time talking face-to-face, but I exchange texts all day.",
        text: "What changes does Georgina say the mobile phone has created?",
        options: ["It stops us seeing friends as often.", "We depend on the Internet.", "We communicate with people in a different way."],
        correctIndex: 2,
        tutor: "Не додумывай то, чего нет! Она не говорит, что мы стали реже видеться (stops seeing). Она говорит, что ИЗМЕНИЛСЯ ФОРМАТ общения (in a different way)."
    },
    {
        id: 78, ruleId: "reading_chronology",
        reading: "I got a job in a fast food restaurant during the day and took acting classes in the evening. I also started performing in theatres later.",
        text: "What does Jessica say about her working life?",
        options: ["Her first job was in a theatre.", "People have always enjoyed her performances.", "She's worked in a variety of places."],
        correctIndex: 2,
        tutor: "Следи за хронологией! Первой работой был ресторан, а не театр. Вариант 'variety of places' (множество разных мест) идеально обобщает её опыт."
    },

    // === ПОРЦИЯ 4: ФИНАЛЬНЫЙ СЕТ ===
    {
        id: 79, ruleId: "noun_police",
        text: "Look! The police ... coming.",
        options: ["is", "was", "has been", "are"],
        correctIndex: 3,
        tutor: "Забудь про русский перевод! Слово 'police' в английском — это ВСЕГДА множественное число (они). Поэтому 'are'."
    },
    {
        id: 80, ruleId: "noun_news_maths",
        text: "Mathematics ... my favourite subject.",
        options: ["are", "were", "have been", "is"],
        correctIndex: 3,
        tutor: "Науки и новости (Maths, Physics, News) кончаются на -s, но это ЕДИНСТВЕННОЕ число. Поэтому 'is'."
    },
    {
        id: 81, ruleId: "noun_clothes",
        text: "My clothes ... wet, so I need to change.",
        options: ["is", "was", "has been", "are"],
        correctIndex: 3,
        tutor: "Одежда (clothes) и парные вещи (trousers, glasses) — это множественное число (они). 'Are wet'."
    },
    {
        id: 82, ruleId: "dialogue_thought",
        text: "Woman: Why didn’t you order coffee?\nMan: I thought it had already been ordered.\n\nWhat does the man mean?",
        options: ["He was sure she had ordered coffee.", "He was unaware that coffee hadn't been ordered.", "He didn't want coffee."],
        correctIndex: 1,
        tutor: "Глагол 'thought' (я думал/предполагал) означает, что он ошибся и НЕ ЗНАЛ правды (was unaware). Если бы он был уверен, он бы сказал 'I was sure'."
    },
    {
        id: 83, ruleId: "dialogue_either",
        text: "Man: Weren’t you in class on Friday either?\nWoman: No.\n\nWhat do we learn?",
        options: ["The woman was at the airport while the man was in class.", "Neither the man nor the woman was in class.", "Both were in class."],
        correctIndex: 1,
        tutor: "Слово 'either' в отрицательном вопросе значит 'ТОЖЕ НЕ'. Мужчина спрашивает: 'Ты ТОЖЕ не была?'. Значит, не были оба (Neither)."
    },
    {
        id: 84, ruleId: "dialogue_sure",
        text: "Man: Hey, will you let me know when 10 minutes have passed?\nWoman: Sure, there's nothing worse than overcooked spaghetti.",
        options: ["She doesn't want spaghetti.", "10 minutes is a long time.", "She'll tell the man when the time is up."],
        correctIndex: 2,
        tutor: "Не додумывай! Она сказала 'Sure' (Конечно). Значит, она просто согласилась сказать, когда выйдет время."
    },
    {
        id: 85, ruleId: "word_formation_producers",
        text: "If you make purchases from local food ... (PRODUCE), you help them.",
        options: ["production", "product", "producers", "producing"],
        correctIndex: 2,
        tutor: "Ты покупаешь у ЛЮДЕЙ (от кого - from). Поэтому 'производителей' (producers), а не 'производства' (production)."
    },
    {
        id: 86, ruleId: "make_vs_get",
        text: "By ... people imagine they are younger, ageing goes into reverse.",
        options: ["getting", "forcing", "allowing", "making"],
        correctIndex: 3,
        tutor: "После пропуска идет глагол 'imagine' (без частицы to). Только конструкция 'make someone do' (заставить/побудить сделать) идет БЕЗ 'to'."
    },
    {
        id: 87, ruleId: "study_vs_research",
        text: "A recent ... of centenarians found that many had led unhealthy lifestyles.",
        options: ["research", "finding", "proof", "study"],
        correctIndex: 3,
        tutor: "Исследование конкретной группы людей с предлогом OF — это 'STUDY of'. 'Research' обычно не используется с предлогом 'of'."
    },
    {
        id: 88, ruleId: "other_vs_whole",
        text: "There were no ... reasons for his behaving like that.",
        options: ["whole", "another", "other", "all"],
        correctIndex: 2,
        tutor: "Не было 'ИНЫХ/ДРУГИХ' причин = 'other reasons'. 'Whole' — это 'целый' (целый торт), тут не подходит по смыслу."
    },
    {
        id: 89, ruleId: "future_in_the_past",
        text: "I felt the whole class looking at me, waiting to see what I ...",
        options: ["will do", "am doing", "would do", "have done"],
        correctIndex: 2,
        tutor: "Главный глагол 'felt' стоит в прошлом. Значит, будущее действие превращается из 'will' в 'WOULD' (будущее в прошедшем)."
    }
];

// Автоматический подсчет весов для рулетки
let rulesWeight = {};
questionsData.forEach(q => {
    rulesWeight[q.ruleId] = 1;
});