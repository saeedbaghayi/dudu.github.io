/* Cambridge IELTS 14 Academic — Test 1 (questions, passages, answer key from the book; personal study use only).
   Sample answers, explanations, vocabulary notes and Persian help are original, written for this app.
   Gap lines use [[n]] for question n. ans: accepted answers (case-insensitive; | not used — list instead). */
window.IELTS = {
  id: 'ielts14-t1',
  title: 'Cambridge IELTS 14 · Test 1',

  /* ============================ LISTENING ============================ */
  listening: {
    help: {
      en: 'The book’s audio is not included. You can still answer and mark all 40 questions, and if you get the MP3 files later, load them below each section.',
      fa: 'فایل صوتی کتاب همراه این برنامه نیست. می‌توانید به هر ۴۰ سؤال جواب دهید و تصحیح کنید؛ اگر بعداً فایل MP3 را پیدا کردید، زیر هر بخش بارگذاری‌اش کنید.'
    },
    sections: [
      { n: 1, title: 'Section 1 · Questions 1–10', topic: 'Crime report form',
        groups: [
          { kind: 'notes', instr: 'Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.',
            instrFa: 'فرم را کامل کنید. برای هر جواب فقط یک کلمه و/یا یک عدد بنویسید.',
            title: 'CRIME REPORT FORM',
            lines: [
              '<b>Type of crime:</b> theft',
              '<i>Example</i> — Name: Louise <u>Taylor</u>',
              '<b>Nationality:</b> [[1]]',
              '<b>Date of birth:</b> 14 December 1977',
              '<b>Occupation:</b> interior designer',
              '<b>Reason for visit:</b> business (to buy antique [[2]])',
              '<b>Length of stay:</b> two months',
              '<b>Current address:</b> [[3]] Apartments (No 15)',
              '<b>Items stolen:</b> a wallet containing approximately £ [[4]] · a [[5]]',
              '<b>Date of theft:</b> [[6]]',
              '<b>Location:</b> outside the [[7]] at about 4 pm',
              '<b>Details of suspect:</b> some boys asked for the [[8]] then ran off · one had a T-shirt with a picture of a tiger · he was about 12, slim build with [[9]] hair',
              '<b>Crime reference number allocated:</b> [[10]]'
            ],
            ans: { 1: ['Canadian'], 2: ['furniture'], 3: ['Park'], 4: ['250', '£250', '250 sterling'], 5: ['phone', 'mobile phone'],
                   6: ['10 September', '10th September', 'September 10', 'September 10th', '10 Sept', '10/9', '10.9'], 7: ['museum'], 8: ['time'],
                   9: ['blond', 'blonde'], 10: ['87954 82361', '8795482361'] } }
        ] },
      { n: 2, title: 'Section 2 · Questions 11–20', topic: 'Induction talk for new apprentices',
        groups: [
          { kind: 'two', ns: [11, 12], instr: 'Choose TWO letters, A–E.', instrFa: 'دو حرف (A تا E) انتخاب کنید.',
            q: 'Which TWO pieces of advice for the first week of an apprenticeship does the manager give?',
            options: [['A', 'get to know colleagues'], ['B', 'learn from any mistakes'], ['C', 'ask lots of questions'], ['D', 'react positively to feedback'], ['E', 'enjoy new challenges']],
            ans: ['A', 'C'] },
          { kind: 'two', ns: [13, 14], instr: 'Choose TWO letters, A–E.', instrFa: 'دو حرف (A تا E) انتخاب کنید.',
            q: 'Which TWO things does the manager say mentors can help with?',
            options: [['A', 'confidence-building'], ['B', 'making career plans'], ['C', 'completing difficult tasks'], ['D', 'making a weekly timetable'], ['E', 'reviewing progress']],
            ans: ['B', 'E'] },
          { kind: 'match', instr: 'What does the manager say about each of the following aspects of the company policy for apprentices? Write the correct letter, A, B or C.',
            instrFa: 'مدیر درباره‌ی هر کدام از این سیاست‌ها چه می‌گوید؟ حرف درست (A، B یا C) را انتخاب کنید.',
            box: [['A', 'It is encouraged.'], ['B', 'There are some restrictions.'], ['C', 'It is against the rules.']],
            title: 'Company policy for apprentices',
            items: [[15, 'Using the internet'], [16, 'Flexible working'], [17, 'Booking holidays'], [18, 'Working overtime'], [19, 'Wearing trainers'], [20, 'Bringing food to work']],
            ans: { 15: 'B', 16: 'B', 17: 'C', 18: 'A', 19: 'A', 20: 'C' } }
        ] },
      { n: 3, title: 'Section 3 · Questions 21–30', topic: 'Cities built by the sea',
        groups: [
          { kind: 'mc', instr: 'Choose the correct letter, A, B or C.', instrFa: 'حرف درست (A، B یا C) را انتخاب کنید.',
            items: [
              [21, 'Carla and Rob were surprised to learn that coastal cities', [['A', 'contain nearly half the world’s population.'], ['B', 'include most of the world’s largest cities.'], ['C', 'are growing twice as fast as other cities.']]],
              [22, 'According to Rob, building coastal cities near to rivers', [['A', 'may bring pollution to the cities.'], ['B', 'may reduce the land available for agriculture.'], ['C', 'may mean the countryside is spoiled by industry.']]],
              [23, 'What mistake was made when building water drainage channels in Miami in the 1950s?', [['A', 'There were not enough of them.'], ['B', 'They were made of unsuitable materials.'], ['C', 'They did not allow for the effects of climate change.']]],
              [24, 'What do Rob and Carla think that the authorities in Miami should do immediately?', [['A', 'take measures to restore ecosystems'], ['B', 'pay for a new flood prevention system'], ['C', 'stop disposing of waste materials into the ocean']]],
              [25, 'What do they agree should be the priority for international action?', [['A', 'greater coordination of activities'], ['B', 'more sharing of information'], ['C', 'agreement on shared policies']]]
            ],
            ans: { 21: 'B', 22: 'A', 23: 'C', 24: 'B', 25: 'A' } },
          { kind: 'match', instr: 'What decision do the students make about each of the following parts of their presentation? Choose FIVE answers from the box (A–G).',
            instrFa: 'دانشجوها درباره‌ی هر بخش از ارائه‌شان چه تصمیمی می‌گیرند؟ پنج جواب از کادر انتخاب کنید (A تا G).',
            box: [['A', 'use visuals'], ['B', 'keep it short'], ['C', 'involve other students'], ['D', 'check the information is accurate'], ['E', 'provide a handout'], ['F', 'focus on one example'], ['G', 'do online research']],
            title: 'Parts of the presentation',
            items: [[26, 'Historical background'], [27, 'Geographical factors'], [28, 'Past mistakes'], [29, 'Future risks'], [30, 'International implications']],
            ans: { 26: 'B', 27: 'A', 28: 'F', 29: 'G', 30: 'C' } }
        ] },
      { n: 4, title: 'Section 4 · Questions 31–40', topic: 'Marine renewable energy (ocean energy)',
        groups: [
          { kind: 'notes', instr: 'Complete the notes below. Write ONE WORD ONLY for each answer.', instrFa: 'یادداشت‌ها را کامل کنید. برای هر جواب فقط یک کلمه بنویسید.',
            title: 'Marine renewable energy (ocean energy)',
            lines: [
              '<b>Introduction</b> — More energy required because of growth in population and [[31]]',
              'What’s needed: renewable energy sources · methods that won’t create pollution',
              '<b>Wave energy</b> — Advantage: waves provide a [[32]] source of renewable energy',
              'Electricity can be generated using offshore or onshore systems · onshore systems may use a reservoir',
              'Problems: waves can move in any [[33]] · movement of sand, etc. on the [[34]] of the ocean may be affected',
              '<b>Tidal energy</b> — Tides are more [[35]] than waves',
              'Planned tidal lagoon in Wales: will be created in a [[36]] at Swansea · breakwater (dam) containing 16 turbines',
              'rising tide forces water through turbines, generating electricity · stored water is released through [[37]], driving the turbines in the reverse direction',
              'Advantages: not dependent on weather · no [[38]] is required to make it work · likely to create a number of [[39]]',
              'Problem: may harm fish and birds, e.g. by affecting [[40]] and building up silt',
              '<b>Ocean thermal energy conversion</b> — uses a difference in temperature between the surface and lower levels · water brought to the surface in a pipe'
            ],
            ans: { 31: ['industry'], 32: ['constant'], 33: ['direction'], 34: ['floor'], 35: ['predictable'], 36: ['bay'], 37: ['gates'], 38: ['fuel'], 39: ['jobs'], 40: ['migration'] } }
        ] }
    ]
  },

  /* ============================ READING ============================ */
  reading: {
    help: {
      en: '60 minutes, 3 passages, 40 questions. Tap 🔈 to hear a paragraph read aloud at your speed — good practice for listening too.',
      fa: '۶۰ دقیقه، ۳ متن، ۴۰ سؤال. روی 🔈 بزنید تا هر پاراگراف با سرعت دلخواه خوانده شود — برای تمرین شنیداری هم خوب است.'
    },
    passages: [
      { n: 1, title: 'The importance of children’s play', qs: 'Questions 1–13', time: 20,
        paras: [
          ['', 'Brick by brick, six-year-old Alice is building a magical kingdom. Imagining fairy-tale turrets and fire-breathing dragons, wicked witches and gallant heroes, she’s creating an enchanting world. Although she isn’t aware of it, this fantasy is helping her take her first steps towards her capacity for creativity and so it will have important repercussions in her adult life.'],
          ['', 'Minutes later, Alice has abandoned the kingdom in favour of playing schools with her younger brother. When she bosses him around as his ‘teacher’, she’s practising how to regulate her emotions through pretence. Later on, when they tire of this and settle down with a board game, she’s learning about the need to follow rules and take turns with a partner.'],
          ['', '‘Play in all its rich variety is one of the highest achievements of the human species,’ says Dr David Whitebread from the Faculty of Education at the University of Cambridge, UK. ‘It underpins how we develop as intellectual, problem-solving adults and is crucial to our success as a highly adaptable species.’'],
          ['', 'Recognising the importance of play is not new: over two millennia ago, the Greek philosopher Plato extolled its virtues as a means of developing skills for adult life, and ideas about play-based learning have been developing since the 19th century.'],
          ['', 'But we live in changing times, and Whitebread is mindful of a worldwide decline in play, pointing out that over half the people in the world now live in cities. ‘The opportunities for free play, which I experienced almost every day of my childhood, are becoming increasingly scarce,’ he says. Outdoor play is curtailed by perceptions of risk to do with traffic, as well as parents’ increased wish to protect their children from being the victims of crime, and by the emphasis on ‘earlier is better’ which is leading to greater competition in academic learning and schools.'],
          ['', 'International bodies like the United Nations and the European Union have begun to develop policies concerned with children’s right to play, and to consider implications for leisure facilities and educational programmes. But what they often lack is the evidence to base policies on.'],
          ['', '‘The type of play we are interested in is child-initiated, spontaneous and unpredictable – but, as soon as you ask a five-year-old “to play”, then you as the researcher have intervened,’ explains Dr Sara Baker. ‘And we want to know what the long-term impact of play is. It’s a real challenge.’'],
          ['', 'Dr Jenny Gibson agrees, pointing out that although some of the steps in the puzzle of how and why play is important have been looked at, there is very little data on the impact it has on the child’s later life.'],
          ['', 'Now, thanks to the university’s new Centre for Research on Play in Education, Development and Learning (PEDAL), Whitebread, Baker, Gibson and a team of researchers hope to provide evidence on the role played by play in how a child develops.'],
          ['', '‘A strong possibility is that play supports the early development of children’s self-control,’ explains Baker. ‘This is our ability to develop awareness of our own thinking processes – it influences how effectively we go about undertaking challenging activities.’'],
          ['', 'In a study carried out by Baker with toddlers and young pre-schoolers, she found that children with greater self-control solved problems more quickly when exploring an unfamiliar set-up requiring scientific reasoning. ‘This sort of evidence makes us think that giving children the chance to play will make them more successful problem-solvers in the long run.’'],
          ['', 'If playful experiences do facilitate this aspect of development, say the researchers, it could be extremely significant for educational practices, because the ability to self-regulate has been shown to be a key predictor of academic performance.'],
          ['', 'Gibson adds: ‘Playful behaviour is also an important indicator of healthy social and emotional development. In my previous research, I investigated how observing children at play can give us important clues about their well-being and can even be useful in the diagnosis of neurodevelopmental disorders like autism.’'],
          ['', 'Whitebread’s recent research has involved developing a play-based approach to supporting children’s writing. ‘Many primary school children find writing difficult, but we showed in a previous study that a playful stimulus was far more effective than an instructional one.’ Children wrote longer and better-structured stories when they first played with dolls representing characters in the story. In the latest study, children first created their story with Lego*, with similar results. ‘Many teachers commented that they had always previously had children saying they didn’t know what to write about. With the Lego building, however, not a single child said this through the whole year of the project.’'],
          ['', 'Whitebread, who directs PEDAL, trained as a primary school teacher in the early 1970s, when, as he describes, ‘the teaching of young children was largely a quiet backwater, untroubled by any serious intellectual debate or controversy.’ Now, the landscape is very different, with hotly debated topics such as school starting age.'],
          ['', '‘Somehow the importance of play has been lost in recent decades. It’s regarded as something trivial, or even as something negative that contrasts with “work”. Let’s not lose sight of its benefits, and the fundamental contributions it makes to human achievements in the arts, sciences and technology. Let’s make sure children have a rich diet of play experiences.’']
        ],
        note: '* Lego: coloured plastic building blocks and other pieces that can be joined together',
        groups: [
          { kind: 'notes', instr: 'Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.', instrFa: 'یادداشت‌ها را کامل کنید. برای هر جواب فقط یک کلمه از متن انتخاب کنید.',
            title: 'Children’s play',
            lines: [
              '<b>Uses of children’s play</b>',
              'building a ‘magical kingdom’ may help develop [[1]]',
              'board games involve [[2]] and turn-taking',
              '<b>Recent changes affecting children’s play</b>',
              'populations of [[3]] have grown',
              'opportunities for free play are limited due to — fear of [[4]] — fear of [[5]] — increased [[6]] in schools',
              '<b>International policies on children’s play</b>',
              'it is difficult to find [[7]] to support new policies',
              'research needs to study the impact of play on the rest of the child’s [[8]]'
            ],
            ans: { 1: ['creativity'], 2: ['rules'], 3: ['cities'], 4: ['traffic', 'crime'], 5: ['crime', 'traffic'], 6: ['competition'], 7: ['evidence'], 8: ['life'] },
            pair: [4, 5],
            why: { 1: '“this fantasy is helping her take her first steps towards her capacity for creativity” (paragraph 1).',
                   2: '“settle down with a board game, she’s learning about the need to follow rules and take turns” (paragraph 2).',
                   3: '“over half the people in the world now live in cities” (paragraph 5).',
                   4: '“perceptions of risk to do with traffic … protect their children from being the victims of crime” — 4 and 5 in either order.',
                   5: 'traffic / crime — either order (paragraph 5).',
                   6: '“leading to greater competition in academic learning and schools” (paragraph 5).',
                   7: '“what they often lack is the evidence to base policies on” (paragraph 6).',
                   8: '“very little data on the impact it has on the child’s later life” (paragraph 8).' } },
          { kind: 'tfng', mode: 'TF', instr: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE or NOT GIVEN.',
            instrFa: 'آیا این جمله‌ها با اطلاعات متن ۱ مطابقت دارند؟ TRUE (درست)، FALSE (غلط) یا NOT GIVEN (اطلاعاتی نیست).',
            items: [
              [9, 'Children with good self-control are known to be likely to do well at school later on.'],
              [10, 'The way a child plays may provide information about possible medical problems.'],
              [11, 'Playing with dolls was found to benefit girls’ writing more than boys’ writing.'],
              [12, 'Children had problems thinking up ideas when they first created the story with Lego.'],
              [13, 'People nowadays regard children’s play as less significant than they did in the past.']
            ],
            ans: { 9: 'TRUE', 10: 'TRUE', 11: 'NOT GIVEN', 12: 'FALSE', 13: 'TRUE' },
            why: { 9: '“the ability to self-regulate has been shown to be a key predictor of academic performance.”',
                   10: '“can even be useful in the diagnosis of neurodevelopmental disorders like autism.”',
                   11: 'The passage mentions dolls and longer stories, but never compares girls and boys.',
                   12: '“With the Lego building, however, not a single child said this [they didn’t know what to write about].”',
                   13: '“Somehow the importance of play has been lost in recent decades. It’s regarded as something trivial.”' } }
        ] },

      { n: 2, title: 'The growth of bike-sharing schemes around the world', sub: 'How Dutch engineer Luud Schimmelpennink helped to devise urban bike-sharing schemes', qs: 'Questions 14–26', time: 20,
        paras: [
          ['A', 'The original idea for an urban bike-sharing scheme dates back to a summer’s day in Amsterdam in 1965. Provo, the organisation that came up with the idea, was a group of Dutch activists who wanted to change society. They believed the scheme, which was known as the Witte Fietsenplan, was an answer to the perceived threats of air pollution and consumerism. In the centre of Amsterdam, they painted a small number of used bikes white. They also distributed leaflets describing the dangers of cars and inviting people to use the white bikes. The bikes were then left unlocked at various locations around the city, to be used by anyone in need of transport.'],
          ['B', 'Luud Schimmelpennink, a Dutch industrial engineer who still lives and cycles in Amsterdam, was heavily involved in the original scheme. He recalls how the scheme succeeded in attracting a great deal of attention – particularly when it came to publicising Provo’s aims – but struggled to get off the ground. The police were opposed to Provo’s initiatives and almost as soon as the white bikes were distributed around the city, they removed them. However, for Schimmelpennink and for bike-sharing schemes in general, this was just the beginning. ‘The first Witte Fietsenplan was just a symbolic thing,’ he says. ‘We painted a few bikes white, that was all. Things got more serious when I became a member of the Amsterdam city council two years later.’'],
          ['C', 'Schimmelpennink seized this opportunity to present a more elaborate Witte Fietsenplan to the city council. ‘My idea was that the municipality of Amsterdam would distribute 10,000 white bikes over the city, for everyone to use,’ he explains. ‘I made serious calculations. It turned out that a white bicycle – per person, per kilometre – would cost the municipality only 10% of what it contributed to public transport per person per kilometre.’ Nevertheless, the council unanimously rejected the plan. ‘They said that the bicycle belongs to the past. They saw a glorious future for the car,’ says Schimmelpennink. But he was not in the least discouraged.'],
          ['D', 'Schimmelpennink never stopped believing in bike-sharing, and in the mid-90s, two Danes asked for his help to set up a system in Copenhagen. The result was the world’s first large-scale bike-share programme. It worked on a deposit: ‘You dropped a coin in the bike and when you returned it, you got your money back.’ After setting up the Danish system, Schimmelpennink decided to try his luck again in the Netherlands – and this time he succeeded in arousing the interest of the Dutch Ministry of Transport. ‘Times had changed,’ he recalls. ‘People had become more environmentally conscious, and the Danish experiment had proved that bike-sharing was a real possibility.’ A new Witte Fietsenplan was launched in 1999 in Amsterdam. However, riding a white bike was no longer free; it cost one guilder per trip and payment was made with a chip card developed by the Dutch bank Postbank. Schimmelpennink designed conspicuous, sturdy white bikes locked in special racks which could be opened with the chip card – the plan started with 250 bikes, distributed over five stations.'],
          ['E', 'Theo Molenaar, who was a system designer for the project, worked alongside Schimmelpennink. ‘I remember when we were testing the bike racks, he announced that he had already designed better ones. But of course, we had to go through with the ones we had.’ The system, however, was prone to vandalism and theft. ‘After every weekend there would always be a couple of bikes missing,’ Molenaar says. ‘I really have no idea what people did with them, because they could instantly be recognised as white bikes.’ But the biggest blow came when Postbank decided to abolish the chip card, because it wasn’t profitable. ‘That chip card was pivotal to the system,’ Molenaar says. ‘To continue the project we would have needed to set up another system, but the business partner had lost interest.’'],
          ['F', 'Schimmelpennink was disappointed, but – characteristically – not for long. In 2002 he got a call from the French advertising corporation JC Decaux, who wanted to set up his bike-sharing scheme in Vienna. ‘That went really well. After Vienna, they set up a system in Lyon. Then in 2007, Paris followed. That was a decisive moment in the history of bike-sharing.’ The huge and unexpected success of the Parisian bike-sharing programme, which now boasts more than 20,000 bicycles, inspired cities all over the world to set up their own schemes, all modelled on Schimmelpennink’s. ‘It’s wonderful that this happened,’ he says. ‘But financially I didn’t really benefit from it, because I never filed for a patent.’'],
          ['G', 'In Amsterdam today, 38% of all trips are made by bike and, along with Copenhagen, it is regarded as one of the two most cycle-friendly capitals in the world – but the city never got another Witte Fietsenplan. Molenaar believes this may be because everybody in Amsterdam already has a bike. Schimmelpennink, however, cannot see that this changes Amsterdam’s need for a bike-sharing scheme. ‘People who travel on the underground don’t carry their bikes around. But often they need additional transport to reach their final destination.’ Although he thinks it is strange that a city like Amsterdam does not have a successful bike-sharing scheme, he is optimistic about the future. ‘In the ’60s we didn’t stand a chance because people were prepared to give their lives to keep cars in the city. But that mentality has totally changed. Today everybody longs for cities that are not dominated by cars.’']
        ],
        groups: [
          { kind: 'match', instr: 'Reading Passage 2 has seven paragraphs, A–G. Which paragraph contains the following information? NB You may use any letter more than once.',
            instrFa: 'متن ۲ هفت پاراگراف (A تا G) دارد. کدام پاراگراف این اطلاعات را دارد؟ هر حرف را می‌شود بیش از یک بار استفاده کرد.',
            box: [['A', 'paragraph A'], ['B', 'paragraph B'], ['C', 'paragraph C'], ['D', 'paragraph D'], ['E', 'paragraph E'], ['F', 'paragraph F'], ['G', 'paragraph G']], boxHidden: true,
            items: [[14, 'a description of how people misused a bike-sharing scheme'], [15, 'an explanation of why a proposed bike-sharing scheme was turned down'],
                    [16, 'a reference to a person being unable to profit from their work'], [17, 'an explanation of the potential savings a bike-sharing scheme would bring'],
                    [18, 'a reference to the problems a bike-sharing scheme was intended to solve']],
            ans: { 14: 'E', 15: 'C', 16: 'F', 17: 'C', 18: 'A' },
            why: { 14: 'E: “prone to vandalism and theft … a couple of bikes missing.”', 15: 'C: “They said that the bicycle belongs to the past. They saw a glorious future for the car.”',
                   16: 'F: “financially I didn’t really benefit from it, because I never filed for a patent.”', 17: 'C: “would cost the municipality only 10% of what it contributed to public transport.”',
                   18: 'A: “an answer to the perceived threats of air pollution and consumerism.”' } },
          { kind: 'two', ns: [19, 20], instr: 'Choose TWO letters, A–E.', instrFa: 'دو حرف (A تا E) انتخاب کنید.',
            q: 'Which TWO of the following statements are made in the text about the Amsterdam bike-sharing scheme of 1999?',
            options: [['A', 'It was initially opposed by a government department.'], ['B', 'It failed when a partner in the scheme withdrew support.'], ['C', 'It aimed to be more successful than the Copenhagen scheme.'], ['D', 'It was made possible by a change in people’s attitudes.'], ['E', 'It attracted interest from a range of bike designers.']],
            ans: ['B', 'D'], why: 'B: Postbank abolished the chip card and “the business partner had lost interest” (E). D: “People had become more environmentally conscious” (D).' },
          { kind: 'two', ns: [21, 22], instr: 'Choose TWO letters, A–E.', instrFa: 'دو حرف (A تا E) انتخاب کنید.',
            q: 'Which TWO of the following statements are made in the text about Amsterdam today?',
            options: [['A', 'The majority of residents would like to prevent all cars from entering the city.'], ['B', 'There is little likelihood of the city having another bike-sharing scheme.'], ['C', 'More trips in the city are made by bike than by any other form of transport.'], ['D', 'A bike-sharing scheme would benefit residents who use public transport.'], ['E', 'The city has a reputation as a place that welcomes cyclists.']],
            ans: ['D', 'E'], why: 'D: “People who travel on the underground … need additional transport.” E: “one of the two most cycle-friendly capitals in the world.” (paragraph G)' },
          { kind: 'notes', instr: 'Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.', instrFa: 'خلاصه را کامل کنید. برای هر جواب فقط یک کلمه از متن انتخاب کنید.',
            title: 'The first urban bike-sharing scheme',
            lines: [
              'The first bike-sharing scheme was the idea of the Dutch group Provo. The people who belonged to this group were [[23]]. They were concerned about damage to the environment and about [[24]], and believed that the bike-sharing scheme would draw attention to these issues. As well as painting some bikes white, they handed out [[25]] that condemned the use of cars.',
              'However, the scheme was not a great success: almost as quickly as Provo left the bikes around the city, the [[26]] took them away. According to Schimmelpennink, the scheme was intended to be symbolic. The idea was to get people thinking about the issues.'
            ],
            ans: { 23: ['activists'], 24: ['consumerism'], 25: ['leaflets'], 26: ['police'] },
            why: { 23: '“a group of Dutch activists who wanted to change society” (A).', 24: '“threats of air pollution and consumerism” (A).', 25: '“distributed leaflets describing the dangers of cars” (A).', 26: '“The police … removed them” (B).' } }
        ] },

      { n: 3, title: 'Motivational factors and the hospitality industry', qs: 'Questions 27–40', time: 20,
        paras: [
          ['', 'A critical ingredient in the success of hotels is developing and maintaining superior performance from their employees. How is that accomplished? What Human Resource Management (HRM) practices should organizations invest in to acquire and retain great employees?'],
          ['', 'Some hotels aim to provide superior working conditions for their employees. The idea originated from workplaces – usually in the non-service sector – that emphasized fun and enjoyment as part of work–life balance. By contrast, the service sector, and more specifically hotels, has traditionally not extended these practices to address basic employee needs, such as good working conditions.'],
          ['', 'Pfeffer (1994) emphasizes that in order to succeed in a global business environment, organizations must make investment in Human Resource Management (HRM) to allow them to acquire employees who possess better skills and capabilities than their competitors. This investment will be to their competitive advantage. Despite this recognition of the importance of employee development, the hospitality industry has historically been dominated by underdeveloped HR practices (Lucas, 2002).'],
          ['', 'Lucas also points out that ‘the substance of HRM practices does not appear to be designed to foster constructive relations with employees or to represent a managerial approach that enables developing and drawing out the full potential of people, even though employees may be broadly satisfied with many aspects of their work’ (Lucas, 2002). In addition, or maybe as a result, high employee turnover has been a recurring problem throughout the hospitality industry. Among the many cited reasons are low compensation, inadequate benefits, poor working conditions and compromised employee morale and attitudes (Maroudas et al., 2008).'],
          ['', 'Ng and Sorensen (2008) demonstrated that when managers provide recognition to employees, motivate employees to work together, and remove obstacles preventing effective performance, employees feel more obligated to stay with the company. This was succinctly summarized by Michel et al. (2013): ‘[P]roviding support to employees gives them the confidence to perform their jobs better and the motivation to stay with the organization.’ Hospitality organizations can therefore enhance employee motivation and retention through the development and improvement of their working conditions. These conditions are inherently linked to the working environment.'],
          ['', 'While it seems likely that employees’ reactions to their job characteristics could be affected by a predisposition to view their work environment negatively, no evidence exists to support this hypothesis (Spector et al., 2000). However, given the opportunity, many people will find something to complain about in relation to their workplace (Poulston, 2009). There is a strong link between the perceptions of employees and particular factors of their work environment that are separate from the work itself, including company policies, salary and vacations.'],
          ['', 'Such conditions are particularly troubling for the luxury hotel market, where high-quality service, requiring a sophisticated approach to HRM, is recognized as a critical source of competitive advantage (Maroudas et al., 2008). In a real sense, the services of hotel employees represent their industry (Schneider and Bowen, 1993). This representation has commonly been limited to guest experiences. This suggests that there has been a dichotomy between the guest environment provided in luxury hotels and the working conditions of their employees.'],
          ['', 'It is therefore essential for hotel management to develop HRM practices that enable them to inspire and retain competent employees. This requires an understanding of what motivates employees at different levels of management and different stages of their careers (Enz and Siguaw, 2000). This implies that it is beneficial for hotel managers to understand what practices are most favorable to increase employee satisfaction and retention.'],
          ['', 'Herzberg (1966) proposes that people have two major types of needs, the first being extrinsic motivation factors relating to the context in which work is performed, rather than the work itself. These include working conditions and job security. When these factors are unfavorable, job dissatisfaction may result. Significantly, though, just fulfilling these needs does not result in satisfaction, but only in the reduction of dissatisfaction (Maroudas et al., 2008).'],
          ['', 'Employees also have intrinsic motivation needs or motivators, which include such factors as achievement and recognition. Unlike extrinsic factors, motivator factors may ideally result in job satisfaction (Maroudas et al., 2008). Herzberg’s (1966) theory discusses the need for a ‘balance’ of these two types of needs.'],
          ['', 'The impact of fun as a motivating factor at work has also been explored. For example, Tews, Michel and Stafford (2013) conducted a study focusing on staff from a chain of themed restaurants in the United States. It was found that fun activities had a favorable impact on performance and manager support for fun had a favorable impact in reducing turnover. Their findings support the view that fun may indeed have a beneficial effect, but the framing of that fun must be carefully aligned with both organizational goals and employee characteristics. ‘Managers must learn how to achieve the delicate balance of allowing employees the freedom to enjoy themselves at work while simultaneously maintaining high levels of performance’ (Tews et al., 2013).'],
          ['', 'Deery (2008) has recommended several actions that can be adopted at the organizational level to retain good staff as well as assist in balancing work and family life. Those particularly appropriate to the hospitality industry include allowing adequate breaks during the working day, staff functions that involve families, and providing health and well-being opportunities.']
        ],
        groups: [
          { kind: 'match', instr: 'Match each statement with the correct researcher, A–F. NB You may use any letter more than once.', instrFa: 'هر جمله را به پژوهشگر درست (A تا F) وصل کنید. هر حرف را می‌شود بیش از یک بار استفاده کرد.',
            box: [['A', 'Pfeffer'], ['B', 'Lucas'], ['C', 'Maroudas et al.'], ['D', 'Ng and Sorensen'], ['E', 'Enz and Siguaw'], ['F', 'Deery']], title: 'List of Researchers',
            items: [[27, 'Hotel managers need to know what would encourage good staff to remain.'], [28, 'The actions of managers may make staff feel they shouldn’t move to a different employer.'],
                    [29, 'Little is done in the hospitality industry to help workers improve their skills.'], [30, 'Staff are less likely to change jobs if cooperation is encouraged.'],
                    [31, 'Dissatisfaction with pay is not the only reason why hospitality workers change jobs.']],
            ans: { 27: 'E', 28: 'D', 29: 'B', 30: 'D', 31: 'C' },
            why: { 27: 'Enz and Siguaw: “an understanding of what motivates employees … to increase employee satisfaction and retention.”', 28: 'Ng and Sorensen: “employees feel more obligated to stay with the company.”',
                   29: 'Lucas: “dominated by underdeveloped HR practices … not … drawing out the full potential of people.”', 30: 'Ng and Sorensen: “motivate employees to work together … feel more obligated to stay.”',
                   31: 'Maroudas et al.: “low compensation, inadequate benefits, poor working conditions and compromised employee morale.”' } },
          { kind: 'tfng', mode: 'YN', instr: 'Do the following statements agree with the claims of the writer in Reading Passage 3? Write YES, NO or NOT GIVEN.',
            instrFa: 'آیا این جمله‌ها با ادعاهای نویسنده‌ی متن ۳ مطابقت دارند؟ YES (بله)، NO (نه) یا NOT GIVEN (معلوم نیست).',
            items: [[32, 'One reason for high staff turnover in the hospitality industry is poor morale.'], [33, 'Research has shown that staff have a tendency to dislike their workplace.'],
                    [34, 'An improvement in working conditions and job security makes staff satisfied with their jobs.'], [35, 'Staff should be allowed to choose when they take breaks during the working day.']],
            ans: { 32: 'YES', 33: 'NO', 34: 'NO', 35: 'NOT GIVEN' },
            why: { 32: '“Among the many cited reasons are … compromised employee morale and attitudes.”', 33: '“no evidence exists to support this hypothesis (Spector et al., 2000).”',
                   34: '“just fulfilling these needs does not result in satisfaction, but only in the reduction of dissatisfaction.”', 35: 'Deery recommends “adequate breaks”, but nothing about staff choosing when to take them.' } },
          { kind: 'notes', instr: 'Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.', instrFa: 'خلاصه را کامل کنید. برای هر جواب فقط یک کلمه از متن انتخاب کنید.',
            title: 'Fun at work',
            lines: ['Tews, Michel and Stafford carried out research on staff in an American chain of [[36]]. They discovered that activities designed for staff to have fun improved their [[37]], and that management involvement led to lower staff [[38]]. They also found that the activities needed to fit with both the company’s [[39]] and the [[40]] of the staff. A balance was required between a degree of freedom and maintaining work standards.'],
            ans: { 36: ['restaurants'], 37: ['performance'], 38: ['turnover'], 39: ['goals'], 40: ['characteristics'] },
            why: { 36: '“staff from a chain of themed restaurants in the United States.”', 37: '“fun activities had a favorable impact on performance.”', 38: '“manager support for fun had a favorable impact in reducing turnover.”',
                   39: '“aligned with both organizational goals and employee characteristics.”', 40: '“… and employee characteristics.”' } }
        ] }
    ]
  },

  /* ============================ WRITING ============================ */
  writing: {
    tasks: [
      { n: 1, time: 20, min: 150,
        prompt: 'The charts below show the average percentages in typical meals of three types of nutrients, all of which may be unhealthy if eaten too much. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
        promptFa: 'نمودارها میانگین درصد سه نوع ماده‌ی مغذی را در وعده‌های معمول نشان می‌دهند (که زیادشان ناسالم است). اطلاعات را با انتخاب و گزارش ویژگی‌های اصلی خلاصه کنید و در جای لازم مقایسه کنید. دست‌کم ۱۵۰ کلمه.',
        chartTitle: 'Average percentages of sodium, saturated fats and added sugars in typical meals consumed in the USA',
        charts: [
          { name: 'Sodium', values: { Breakfast: 14, Lunch: 29, Dinner: 43, Snacks: 14 } },
          { name: 'Saturated fat', values: { Breakfast: 16, Lunch: 26, Dinner: 37, Snacks: 21 } },
          { name: 'Added sugar', values: { Breakfast: 16, Lunch: 19, Dinner: 23, Snacks: 42 } }
        ],
        tips: [
          ['Start with a paraphrase of the task, not a copy.', 'با بازنویسی صورت سؤال شروع کنید، نه کپی آن.'],
          ['Write an overview: the main pattern (dinner = most sodium & fat; snacks = most sugar).', 'یک جمع‌بندی کلی بنویسید: الگوی اصلی (شام بیشترین سدیم و چربی؛ تنقلات بیشترین قند).'],
          ['Group the data: sodium + fat together, sugar separately. Compare, don’t just list numbers.', 'داده‌ها را گروه‌بندی کنید: سدیم و چربی با هم، قند جدا. مقایسه کنید، فقط عدد ردیف نکنید.']
        ],
        model: 'The three pie charts compare the proportions of sodium, saturated fat and added sugar that Americans typically consume at breakfast, lunch and dinner, and in snacks.\n\nOverall, dinner is the main source of both sodium and saturated fat, whereas snacks account for by far the largest share of added sugar. Breakfast contributes the smallest, or joint smallest, proportion of all three nutrients.\n\nLooking first at sodium, dinner provides 43% of the daily intake, roughly three times the figure for breakfast and for snacks (14% each), while lunch is responsible for 29%. Saturated fat follows a similar pattern, although the differences are less extreme: dinner again comes top at 37%, followed by lunch at 26%, with snacks and breakfast making up 21% and 16% respectively.\n\nAdded sugar, however, shows a very different distribution. Snacks are the largest contributor, at 42%, which is more than the combined share of breakfast (16%) and lunch (19%). Dinner, which dominates the other two charts, supplies only 23% of added sugar.\n\nIn short, the evening meal is the biggest concern for salt and fat intake, while sugary snacks eaten between meals are the main problem where added sugar is concerned.',
        modelNote: 'About 200 words · original sample written for this app (not from the book).' },
      { n: 2, time: 40, min: 250,
        prompt: 'Some people believe that it is best to accept a bad situation, such as an unsatisfactory job or shortage of money. Others argue that it is better to try and improve such situations. Discuss both these views and give your own opinion.',
        promptFa: 'برخی معتقدند بهتر است یک وضعیت بد (مثل شغل ناراضی‌کننده یا کمبود پول) را بپذیریم. برخی دیگر می‌گویند بهتر است برای بهبود آن تلاش کنیم. هر دو دیدگاه را بررسی کنید و نظر خودتان را بگویید. دست‌کم ۲۵۰ کلمه.',
        tips: [
          ['Discuss BOTH views (one paragraph each), then give a clear opinion.', 'هر دو دیدگاه را بررسی کنید (هر کدام یک پاراگراف) و نظر روشن خودتان را بدهید.'],
          ['State your opinion in the introduction and repeat it in the conclusion.', 'نظرتان را در مقدمه بگویید و در نتیجه‌گیری تکرار کنید.'],
          ['Use a real example for each side (job, money).', 'برای هر طرف یک مثال واقعی بیاورید (شغل، پول).']
        ],
        model: 'When people face difficult circumstances, such as a disappointing job or financial hardship, they tend to respond in one of two ways: some accept the situation, while others actively try to change it. Although acceptance can sometimes be the wiser choice, I believe that trying to improve a bad situation is usually the better approach.\n\nThose who favour acceptance argue that some problems cannot be solved quickly, and that fighting them only leads to frustration. For example, a person in an unsatisfying job may have few alternatives in a weak labour market, and resigning without another offer could leave them with no income at all. In such cases, accepting the situation for a while and focusing on its positive aspects, such as a stable salary or supportive colleagues, can protect a person’s mental health and financial security.\n\nOn the other hand, many people believe that accepting a bad situation means giving up on one’s potential. If someone is short of money, they can take practical steps: creating a budget, learning a new skill or looking for a better-paid position. These actions may be difficult at first, but they often lead to lasting improvements. Moreover, people who try to change their circumstances usually gain confidence and experience, even when their efforts are not completely successful.\n\nIn my opinion, the best response combines both attitudes. We should accept what is genuinely beyond our control in the short term, but we should not treat a bad situation as permanent. A person in a poor job, for instance, can stay there while studying in the evenings and applying for other positions.\n\nIn conclusion, while acceptance may be sensible in the short run, actively working to improve one’s situation is, in most cases, the more rewarding choice.',
        modelNote: 'About 300 words · original sample written for this app (not from the book).' }
    ],
    phrases: [
      ['The charts compare / illustrate …', 'نمودارها … را مقایسه می‌کنند / نشان می‌دهند'],
      ['Overall, it is clear that …', 'در کل، روشن است که …'],
      ['… accounts for the largest share of …', '… بیشترین سهم … را دارد'],
      ['… roughly three times the figure for …', 'تقریباً سه برابر رقم …'],
      ['respectively', 'به ترتیب'],
      ['By contrast, … / However, …', 'در مقابل، … / با این حال، …'],
      ['Those who favour … argue that …', 'طرفداران … استدلال می‌کنند که …'],
      ['On the other hand, …', 'از سوی دیگر، …'],
      ['In my opinion, … / I firmly believe that …', 'به نظر من، … / قویاً معتقدم که …'],
      ['In conclusion, …', 'در نتیجه، …']
    ]
  },

  /* ============================ SPEAKING ============================ */
  speaking: {
    part1: { topic: 'Future',
      qs: [
        { q: 'What job would you like to have ten years from now? Why?',
          sample: 'Ten years from now, I’d love to be working as a data scientist, ideally leading a small team. I’ve always enjoyed finding patterns in numbers, and I think it’s a field where you can make a real difference, whether that’s in healthcare or finance. I also like the idea of a job where I’m constantly learning.' },
        { q: 'How useful will English be for your future? Why/Why not?',
          sample: 'Extremely useful, I’d say. Most of the research and online courses in my field are in English, and if I want to work for an international company, I’ll need to communicate clearly with colleagues from all over the world. So for me, English isn’t just a subject – it’s more like a key that opens a lot of doors.' },
        { q: 'How much travelling do you hope to do in the future? Why/Why not?',
          sample: 'Quite a lot, hopefully. I’d really like to see more of Europe and also visit Japan, because I’m fascinated by the way it combines tradition with modern technology. That said, I’d prefer to travel slowly and spend longer in each place rather than rushing around ticking off famous sights.' },
        { q: 'How do you think your life will change in the future? Why/Why not?',
          sample: 'I imagine it’ll become a lot busier. If everything goes to plan, I’ll have finished my studies, started a career and maybe even moved to another country. I suppose the biggest change will be having more responsibility, which is a bit scary, but also quite exciting.' }
      ] },
    part2: {
      card: 'Describe a book that you enjoyed reading because you had to think a lot.',
      points: ['what this book was', 'why you decided to read it', 'what reading this book made you think about', 'and explain why you enjoyed reading this book.'],
      cardFa: 'کتابی را توصیف کنید که از خواندنش لذت بردید چون مجبور شدید زیاد فکر کنید: چه کتابی بود، چرا خواندید، شما را به فکر چه چیزی انداخت، و چرا از خواندنش لذت بردید.',
      sample: 'The book I’d like to talk about is “Sapiens” by Yuval Noah Harari, which is a history of humankind from the Stone Age to the present day.\n\nI decided to read it a couple of years ago because several of my friends kept recommending it, and I’d also seen the author interviewed online. I was curious to find out why so many people found it so thought-provoking.\n\nWhat made me think the most was the idea that a lot of things we take for granted – like money, nations and companies – only exist because large numbers of people believe in the same stories. I’d never looked at it that way before, and it made me question many of my own assumptions. I remember stopping after almost every chapter just to think about what I’d read, and sometimes I’d even discuss it with my family over dinner.\n\nThe reason I enjoyed it so much is that it wasn’t an easy read, but it was never boring either. The author explains complicated ideas in a clear and often humorous way, so I felt I was learning something on every page. Even though I didn’t agree with all of his arguments, the book really changed the way I see the world, and I think that’s the best thing a book can do.' },
    part3: [
      { topic: 'Children and reading', qs: [
        { q: 'What are the most popular types of children’s books in your country?',
          sample: 'I’d say picture books are the most popular for young children, especially traditional folk tales and stories with animal characters. As children get a bit older, adventure series and comics become really popular, and more recently, translated fantasy novels have become a big trend among teenagers.' },
        { q: 'What are the benefits of parents reading books to their children?',
          sample: 'There are quite a few benefits. First of all, it helps children develop their vocabulary and listening skills long before they can read by themselves. It’s also a great way for parents and children to spend quality time together, which strengthens their relationship. And I think children who are read to regularly tend to see reading as a pleasure rather than a chore later on.' },
        { q: 'Should parents always let children choose the books they read?',
          sample: 'Not always, in my opinion. It’s important to give children some freedom, because they’re much more likely to enjoy reading if they choose books that genuinely interest them. However, parents should still guide them, for example by introducing different genres or making sure the content is suitable for their age. So ideally it should be a balance between choice and guidance.' }
      ] },
      { topic: 'Electronic books', qs: [
        { q: 'How popular are electronic books in your country?',
          sample: 'They’re becoming more popular, particularly among young people and commuters, because you can read them on your phone. Having said that, printed books are still very much loved, and many people I know prefer the feeling of holding a real book, especially for leisure reading.' },
        { q: 'What are the advantages of parents reading electronic books (compared to printed books)?',
          sample: 'The main advantage is convenience. A parent can carry dozens of books on one tablet, which is really handy when travelling. Many e-books for children also include interactive features, such as audio or animations, which can keep young children engaged. They’re often cheaper too, and you can download a new book instantly.' },
        { q: 'Will electronic books ever completely replace printed books in the future?',
          sample: 'I don’t think they will, at least not completely. Printed books have a lot of sentimental value, and many people enjoy collecting them or giving them as gifts. There are also concerns about screen time, especially for children. I think the two formats will continue to exist side by side, with people choosing whichever suits the situation.' }
      ] }
    ],
    tips: [
      ['Part 1: answer in 2–4 sentences: answer + reason + example.', 'بخش ۱: در ۲ تا ۴ جمله جواب دهید: جواب + دلیل + مثال.'],
      ['Part 2: use your 1 minute to write key words for each point, then talk for the full 2 minutes.', 'بخش ۲: در ۱ دقیقه برای هر نکته کلیدواژه بنویسید، بعد کامل ۲ دقیقه صحبت کنید.'],
      ['Part 3: give an opinion, explain it, and consider another side.', 'بخش ۳: نظر بدهید، توضیح دهید و طرف دیگر را هم در نظر بگیرید.']
    ]
  },

  /* ============================ WORDS (flashcards) ============================ */
  words: [
    { w: 'repercussion', p: 'n.', en: 'an effect or result, often an indirect one', fa: 'پیامد، اثر', ex: 'it will have important repercussions in her adult life' },
    { w: 'regulate', p: 'v.', en: 'to control', fa: 'تنظیم کردن، کنترل کردن', ex: 'she’s practising how to regulate her emotions' },
    { w: 'pretence', p: 'n.', en: 'pretending; make-believe', fa: 'وانمود، تظاهر', ex: 'regulate her emotions through pretence' },
    { w: 'underpin', p: 'v.', en: 'to support or form the basis of', fa: 'زیربنای چیزی بودن', ex: 'It underpins how we develop as intellectual adults' },
    { w: 'extol', p: 'v.', en: 'to praise very highly', fa: 'ستودن', ex: 'Plato extolled its virtues' },
    { w: 'mindful of', p: 'adj.', en: 'aware of', fa: 'آگاه به، متوجه', ex: 'Whitebread is mindful of a worldwide decline in play' },
    { w: 'scarce', p: 'adj.', en: 'not enough; rare', fa: 'کمیاب', ex: 'are becoming increasingly scarce' },
    { w: 'curtail', p: 'v.', en: 'to reduce or limit', fa: 'محدود کردن، کاهش دادن', ex: 'Outdoor play is curtailed by perceptions of risk' },
    { w: 'spontaneous', p: 'adj.', en: 'happening naturally, not planned', fa: 'خودجوش', ex: 'child-initiated, spontaneous and unpredictable' },
    { w: 'intervene', p: 'v.', en: 'to become involved in order to change something', fa: 'دخالت کردن', ex: 'you as the researcher have intervened' },
    { w: 'predictor', p: 'n.', en: 'something that shows what will happen', fa: 'پیش‌بینی‌کننده', ex: 'a key predictor of academic performance' },
    { w: 'indicator', p: 'n.', en: 'a sign that shows something', fa: 'نشانه، شاخص', ex: 'an important indicator of healthy development' },
    { w: 'trivial', p: 'adj.', en: 'not important', fa: 'بی‌اهمیت', ex: 'It’s regarded as something trivial' },
    { w: 'backwater', p: 'n.', en: 'a place or area where little changes', fa: 'جای راکد و دورافتاده', ex: 'largely a quiet backwater' },
    { w: 'activist', p: 'n.', en: 'a person who campaigns for change', fa: 'فعال (اجتماعی/سیاسی)', ex: 'a group of Dutch activists' },
    { w: 'consumerism', p: 'n.', en: 'buying too many goods; a culture focused on shopping', fa: 'مصرف‌گرایی', ex: 'threats of air pollution and consumerism' },
    { w: 'leaflet', p: 'n.', en: 'a printed sheet of information', fa: 'بروشور، اعلامیه', ex: 'They also distributed leaflets' },
    { w: 'symbolic', p: 'adj.', en: 'representing an idea rather than practical', fa: 'نمادین', ex: 'just a symbolic thing' },
    { w: 'municipality', p: 'n.', en: 'a city or town with its own government', fa: 'شهرداری', ex: 'the municipality of Amsterdam' },
    { w: 'unanimously', p: 'adv.', en: 'with everyone agreeing', fa: 'به اتفاق آرا', ex: 'the council unanimously rejected the plan' },
    { w: 'deposit', p: 'n.', en: 'money you pay and get back later', fa: 'ودیعه، پول ضمانت', ex: 'It worked on a deposit' },
    { w: 'conspicuous', p: 'adj.', en: 'very easy to see', fa: 'چشمگیر، آشکار', ex: 'conspicuous, sturdy white bikes' },
    { w: 'prone to', p: 'adj.', en: 'likely to suffer from', fa: 'مستعدِ', ex: 'prone to vandalism and theft' },
    { w: 'vandalism', p: 'n.', en: 'deliberate damage to property', fa: 'خرابکاری', ex: 'prone to vandalism and theft' },
    { w: 'pivotal', p: 'adj.', en: 'of central importance', fa: 'محوری، کلیدی', ex: 'That chip card was pivotal to the system' },
    { w: 'abolish', p: 'v.', en: 'to officially end', fa: 'لغو کردن', ex: 'Postbank decided to abolish the chip card' },
    { w: 'patent', p: 'n.', en: 'legal right to be the only one to make an invention', fa: 'حق ثبت اختراع', ex: 'I never filed for a patent' },
    { w: 'retain', p: 'v.', en: 'to keep', fa: 'نگه داشتن', ex: 'to acquire and retain great employees' },
    { w: 'turnover', p: 'n.', en: 'the rate at which staff leave and are replaced', fa: 'جابه‌جایی نیرو', ex: 'high employee turnover' },
    { w: 'compensation', p: 'n.', en: 'pay and benefits for work', fa: 'حقوق و مزایا', ex: 'low compensation, inadequate benefits' },
    { w: 'morale', p: 'n.', en: 'the confidence and enthusiasm of a group', fa: 'روحیه', ex: 'compromised employee morale' },
    { w: 'predisposition', p: 'n.', en: 'a tendency to behave in a certain way', fa: 'گرایش، زمینه‌ی قبلی', ex: 'a predisposition to view their work environment negatively' },
    { w: 'dichotomy', p: 'n.', en: 'a division between two opposite things', fa: 'دوگانگی', ex: 'a dichotomy between the guest environment and working conditions' },
    { w: 'extrinsic', p: 'adj.', en: 'coming from outside (e.g. pay, conditions)', fa: 'بیرونی', ex: 'extrinsic motivation factors' },
    { w: 'intrinsic', p: 'adj.', en: 'coming from inside (e.g. achievement)', fa: 'درونی', ex: 'intrinsic motivation needs' },
    { w: 'apprentice', p: 'n.', en: 'a person learning a job while working', fa: 'کارآموز', ex: 'induction talk for new apprentices' },
    { w: 'mentor', p: 'n.', en: 'an experienced person who advises', fa: 'راهنما، مربی', ex: 'mentors can help with making career plans' },
    { w: 'overtime', p: 'n.', en: 'extra hours worked', fa: 'اضافه‌کاری', ex: 'Working overtime' },
    { w: 'coastal', p: 'adj.', en: 'on or near the coast', fa: 'ساحلی', ex: 'coastal cities' },
    { w: 'drainage', p: 'n.', en: 'a system for carrying water away', fa: 'زهکشی', ex: 'water drainage channels in Miami' },
    { w: 'tidal', p: 'adj.', en: 'relating to the rise and fall of the sea', fa: 'جزر و مدی', ex: 'Tidal energy' },
    { w: 'silt', p: 'n.', en: 'fine sand and mud carried by water', fa: 'رسوب، گل‌ولای', ex: 'building up silt' },
    { w: 'sodium', p: 'n.', en: 'a chemical element found in salt', fa: 'سدیم', ex: 'Average percentages of sodium' },
    { w: 'saturated fat', p: 'n.', en: 'a type of fat found in meat and dairy', fa: 'چربی اشباع‌شده', ex: 'saturated fats … in typical meals' }
  ],

  /* official IELTS raw-score → band tables (Academic) */
  bands: {
    listening: [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [11, 4], [8, 3.5], [6, 3], [4, 2.5], [0, 0]],
    reading:   [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [0, 0]]
  }
};
