// data/textbook-texts.js — 课文对话数据
// 包含各版本教材的 Let's talk / Let's learn / Role-play 等课文内容

// ==================== 人教版PEP 课文 ====================

const pepTexts = [
  // ========== 三年级上册（2024 新版 PEP）==========
  { title: '三年级上册', units: [
  // Unit 1: Making friends (1-13)
  {
    title: 'Unit 1 Making friends',
    page: '1-13',
    sections: [
      { type: 'warmup', title: 'Warm-up', page: '1-3', dialogues: [
        { speaker: '', text: 'Hello! I\'m Zoom.', cn: '你好！我是Zoom。' },
        { speaker: '', text: 'Hi, I\'m Zip.', cn: '嗨，我是Zip。' },
        { speaker: '', text: 'We are friends.', cn: '我们是朋友。' },
        { speaker: '', text: 'Let\'s have fun together!', cn: '我们一起玩吧！' },
      ]},
      { type: 'part', title: 'Part A', page: '4-6', dialogues: [
        { speaker: 'Chen Jie', text: 'Hello! I\'m Chen Jie. What\'s your name?', cn: '你好！我是陈洁。你叫什么名字？' },
        { speaker: 'Mike', text: 'Hi! My name is Mike Black.', cn: '嗨！我叫Mike Black。' },
        { speaker: 'Chen Jie', text: 'Nice to meet you, Mike.', cn: '很高兴认识你，Mike。' },
        { speaker: 'Mike', text: 'Nice to meet you, too.', cn: '我也很高兴认识你。' },
        { speaker: 'Chen Jie', text: 'Let\'s be friends!', cn: '我们做朋友吧！' },
        { speaker: 'Mike', text: 'OK!', cn: '好的！' },
        { speaker: '', text: 'Hello! I\'m ...', cn: '你好！我是……' },
        { speaker: '', text: 'Hi! My name is ...', cn: '嗨！我叫……' },
        { speaker: '', text: 'Nice to meet you.', cn: '很高兴认识你。' },
        { speaker: '', text: 'Nice to meet you, too.', cn: '我也很高兴认识你。' },
      ]},
      { type: 'part', title: 'Part B', page: '7-9', dialogues: [
        { speaker: 'Sarah', text: 'Can I play with you?', cn: '我能和你一起玩吗？' },
        { speaker: 'Wu Binbin', text: 'Sure! Let\'s play together.', cn: '当然！我们一起玩吧。' },
        { speaker: 'Sarah', text: 'Thank you! You are a good friend.', cn: '谢谢！你是个好朋友。' },
        { speaker: 'Wu Binbin', text: 'Friends share. Here you are.', cn: '朋友要分享。给你。' },
        { speaker: 'Sarah', text: 'Wow! Thank you so much!', cn: '哇！太谢谢你了！' },
        { speaker: '', text: 'We share toys.', cn: '我们分享玩具。' },
        { speaker: '', text: 'We smile at friends.', cn: '我们对朋友微笑。' },
        { speaker: '', text: 'We listen when friends talk.', cn: '朋友说话时我们倾听。' },
        { speaker: '', text: 'We help each other.', cn: '我们互相帮助。' },
        { speaker: '', text: 'Good friends play together.', cn: '好朋友一起玩。' },
      ]},
      { type: 'story', title: 'Part C', page: '10-13', dialogues: [
        { speaker: 'Zoom', text: 'Hi, Zip! Let\'s go to the park.', cn: '嗨，Zip！我们去公园吧。' },
        { speaker: 'Zip', text: 'Great idea! Let\'s go!', cn: '好主意！我们走吧！' },
        { speaker: 'Zoom', text: 'Look! A new friend.', cn: '看！一个新朋友。' },
        { speaker: 'Zip', text: 'Hello! Come and play with us!', cn: '你好！来和我们一起玩吧！' },
      ]}
    ]
  },
  // Unit 2: Different families (14-25)
  {
    title: 'Unit 2 Different families',
    page: '14-25',
    sections: [
      { type: 'warmup', title: 'Warm-up', page: '14-15', dialogues: [
        { speaker: '', text: 'This is my family.', cn: '这是我的家庭。' },
        { speaker: '', text: 'I love my family.', cn: '我爱我的家人。' },
        { speaker: '', text: 'Big family or small family?', cn: '大家庭还是小家庭？' },
      ]},
      { type: 'part', title: 'Part A', page: '16-18', dialogues: [
        { speaker: 'Chen Jie', text: 'This is my family. Look!', cn: '这是我的家庭。看！' },
        { speaker: 'Sarah', text: 'Who\'s this?', cn: '这是谁？' },
        { speaker: 'Chen Jie', text: 'This is my dad.', cn: '这是我爸爸。' },
        { speaker: 'Chen Jie', text: 'This is my mum.', cn: '这是我妈妈。' },
        { speaker: 'Sarah', text: 'And who\'s this?', cn: '那这是谁？' },
        { speaker: 'Chen Jie', text: 'This is my grandma. She lives with us.', cn: '这是我奶奶。她和我们住在一起。' },
        { speaker: '', text: 'This is my father.', cn: '这是我的爸爸。' },
        { speaker: '', text: 'This is my mother.', cn: '这是我的妈妈。' },
        { speaker: '', text: 'This is my big brother.', cn: '这是我的哥哥。' },
        { speaker: '', text: 'This is my little sister.', cn: '这是我的妹妹。' },
        { speaker: '', text: 'This is my grandma.', cn: '这是我的奶奶。' },
        { speaker: '', text: 'This is my grandpa.', cn: '这是我的爷爷。' },
      ]},
      { type: 'part', title: 'Part B', page: '19-21', dialogues: [
        { speaker: 'Mike', text: 'Look! This is my family photo.', cn: '看！这是我的家庭照片。' },
        { speaker: 'Wu Binbin', text: 'Wow! You have a big family!', cn: '哇！你有一个大家庭！' },
        { speaker: 'Mike', text: 'Yes. This is my dad, my mum, my brother and me.', cn: '是的。这是我爸爸、妈妈、哥哥和我。' },
        { speaker: 'Wu Binbin', text: 'My family is small. Just me and my mum and dad.', cn: '我的家庭很小。只有我和我的爸爸妈妈。' },
        { speaker: 'Mike', text: 'Every family is special!', cn: '每个家庭都很特别！' },
        { speaker: '', text: 'I have a big family.', cn: '我有一个大家庭。' },
        { speaker: '', text: 'I have a small family.', cn: '我有一个小家庭。' },
        { speaker: '', text: 'My family has five people.', cn: '我家有五口人。' },
        { speaker: '', text: 'Some families are big. Some are small.', cn: '有的家庭大，有的家庭小。' },
      ]},
      { type: 'story', title: 'Part C', page: '22-25', dialogues: [
        { speaker: 'Zoom', text: 'This is my family tree.', cn: '这是我的家谱树。' },
        { speaker: 'Zip', text: 'Wow! So many people!', cn: '哇！好多人啊！' },
        { speaker: 'Zoom', text: 'This is my grandpa and grandma.', cn: '这是我的爷爷和奶奶。' },
        { speaker: 'Zip', text: 'They look very kind!', cn: '他们看起来很慈祥！' },
      ]}
    ]
  },
  // Unit 3: Amazing animals (26-37)
  {
    title: 'Unit 3 Amazing animals',
    page: '26-37',
    sections: [
      { type: 'warmup', title: 'Warm-up', page: '26-27', dialogues: [
        { speaker: '', text: 'What animals do you know?', cn: '你知道什么动物？' },
        { speaker: '', text: 'I see a cat, a dog, a bird...', cn: '我看到猫、狗、鸟……' },
        { speaker: '', text: 'Animals are amazing!', cn: '动物真神奇！' },
      ]},
      { type: 'part', title: 'Part A', page: '28-30', dialogues: [
        { speaker: 'Mike', text: 'Do you have a pet?', cn: '你有宠物吗？' },
        { speaker: 'Chen Jie', text: 'Yes, I have a cat. Her name is Mimi.', cn: '有，我有一只猫。她叫Mimi。' },
        { speaker: 'Mike', text: 'I like cats! I have a dog.', cn: '我喜欢猫！我有一只狗。' },
        { speaker: 'Chen Jie', text: 'What\'s his name?', cn: '他叫什么名字？' },
        { speaker: 'Mike', text: 'His name is Sam. He can run fast!', cn: '他叫Sam。他能跑得很快！' },
        { speaker: '', text: 'I have a cat.', cn: '我有一只猫。' },
        { speaker: '', text: 'I have a dog.', cn: '我有一只狗。' },
        { speaker: '', text: 'I have a bird.', cn: '我有一只鸟。' },
        { speaker: '', text: 'I have a fish.', cn: '我有一条鱼。' },
        { speaker: '', text: 'I have a rabbit.', cn: '我有一只兔子。' },
      ]},
      { type: 'part', title: 'Part B', page: '31-33', dialogues: [
        { speaker: 'Wu Binbin', text: 'Let\'s go to the zoo!', cn: '我们去动物园吧！' },
        { speaker: 'Sarah', text: 'Look! What\'s that?', cn: '看！那是什么？' },
        { speaker: 'Wu Binbin', text: 'It\'s a panda. It\'s black and white.', cn: '是一只熊猫。黑白相间的。' },
        { speaker: 'Sarah', text: 'It\'s so cute! I love pandas.', cn: '太可爱了！我喜欢熊猫。' },
        { speaker: 'Wu Binbin', text: 'Look at that monkey! It can climb.', cn: '看那只猴子！它会爬树。' },
        { speaker: '', text: 'This is a monkey. It can climb.', cn: '这是一只猴子。它会爬树。' },
        { speaker: '', text: 'This is an elephant. It\'s big.', cn: '这是一头大象。它很大。' },
        { speaker: '', text: 'This is a tiger. It can run.', cn: '这是一只老虎。它会跑。' },
        { speaker: '', text: 'This is a panda. It\'s from China.', cn: '这是一只熊猫。它来自中国。' },
        { speaker: '', text: 'This is a giraffe. It\'s tall.', cn: '这是一只长颈鹿。它很高。' },
      ]},
      { type: 'story', title: 'Part C', page: '34-37', dialogues: [
        { speaker: 'Zoom', text: 'Let\'s play a game! What animal am I?', cn: '来玩游戏！猜猜我是什么动物？' },
        { speaker: 'Zip', text: 'Are you a cat?', cn: '你是猫吗？' },
        { speaker: 'Zoom', text: 'No! I can swim.', cn: '不是！我会游泳。' },
        { speaker: 'Zip', text: 'Are you a fish?', cn: '你是鱼吗？' },
        { speaker: 'Zoom', text: 'Yes! You got it!', cn: '是的！你猜对了！' },
      ]}
    ]
  },
  // Unit 4: Plants around us (38-49)
  {
    title: 'Unit 4 Plants around us',
    page: '38-49',
    sections: [
      { type: 'warmup', title: 'Warm-up', page: '38-39', dialogues: [
        { speaker: '', text: 'Look! Flowers, trees, grass...', cn: '看！花、树、草……' },
        { speaker: '', text: 'Plants are everywhere!', cn: '植物无处不在！' },
        { speaker: '', text: 'What plants do you like?', cn: '你喜欢什么植物？' },
      ]},
      { type: 'part', title: 'Part A', page: '40-42', dialogues: [
        { speaker: 'Mike', text: 'Do you like apples?', cn: '你喜欢苹果吗？' },
        { speaker: 'Chen Jie', text: 'Yes, I do. Apples are yummy.', cn: '是的。苹果很好吃。' },
        { speaker: 'Mike', text: 'Do you like bananas?', cn: '你喜欢香蕉吗？' },
        { speaker: 'Chen Jie', text: 'No, I don\'t. I like oranges.', cn: '不，我不喜欢。我喜欢橙子。' },
        { speaker: 'Mike', text: 'Let\'s share an orange!', cn: '我们一起分享一个橙子吧！' },
        { speaker: '', text: 'I like apples.', cn: '我喜欢苹果。' },
        { speaker: '', text: 'I like oranges.', cn: '我喜欢橙子。' },
        { speaker: '', text: 'I like bananas.', cn: '我喜欢香蕉。' },
        { speaker: '', text: 'I like grapes.', cn: '我喜欢葡萄。' },
        { speaker: '', text: 'I like watermelons.', cn: '我喜欢西瓜。' },
      ]},
      { type: 'part', title: 'Part B', page: '43-45', dialogues: [
        { speaker: 'Wu Binbin', text: 'Look at my garden! I have flowers.', cn: '看看我的花园！我种了花。' },
        { speaker: 'Sarah', text: 'They\'re beautiful! What do plants need?', cn: '它们真漂亮！植物需要什么？' },
        { speaker: 'Wu Binbin', text: 'Plants need sun, water and air.', cn: '植物需要阳光、水和空气。' },
        { speaker: 'Sarah', text: 'We can water the plants every day.', cn: '我们可以每天给植物浇水。' },
        { speaker: '', text: 'We need trees. They give us fresh air.', cn: '我们需要树。它们给我们新鲜空气。' },
        { speaker: '', text: 'We need flowers. They are beautiful.', cn: '我们需要花。它们很美。' },
        { speaker: '', text: 'We can grow plants at school.', cn: '我们可以在学校种植物。' },
      ]},
      { type: 'story', title: 'Part C', page: '46-49', dialogues: [
        { speaker: 'Zip', text: 'Look, Zoom! I planted a seed!', cn: '看，Zoom！我种了一颗种子！' },
        { speaker: 'Zoom', text: 'What will it grow into?', cn: '它会变成什么？' },
        { speaker: 'Zip', text: 'Maybe a sunflower! Let\'s water it every day.', cn: '也许是一朵向日葵！我们每天给它浇水吧。' },
      ]}
    ]
  },
  // Unit 5: The colourful world (50-61)
  {
    title: 'Unit 5 The colourful world',
    page: '50-61',
    sections: [
      { type: 'warmup', title: 'Warm-up', page: '50-51', dialogues: [
        { speaker: '', text: 'Red, yellow, blue, green...', cn: '红、黄、蓝、绿……' },
        { speaker: '', text: 'Colours are everywhere!', cn: '颜色无处不在！' },
        { speaker: '', text: 'What colour do you like?', cn: '你喜欢什么颜色？' },
      ]},
      { type: 'part', title: 'Part A', page: '52-54', dialogues: [
        { speaker: 'Sarah', text: 'What colour is your schoolbag?', cn: '你的书包是什么颜色？' },
        { speaker: 'Chen Jie', text: 'It\'s purple. I like purple.', cn: '紫色的。我喜欢紫色。' },
        { speaker: 'Sarah', text: 'My schoolbag is pink and white.', cn: '我的书包是粉色和白色的。' },
        { speaker: 'Chen Jie', text: 'It\'s very nice!', cn: '很好看！' },
        { speaker: '', text: 'What colour is it?', cn: '它是什么颜色？' },
        { speaker: '', text: 'It\'s red.', cn: '是红色的。' },
        { speaker: '', text: 'It\'s yellow.', cn: '是黄色的。' },
        { speaker: '', text: 'It\'s blue.', cn: '是蓝色的。' },
        { speaker: '', text: 'It\'s green.', cn: '是绿色的。' },
        { speaker: '', text: 'It\'s purple.', cn: '是紫色的。' },
      ]},
      { type: 'part', title: 'Part B', page: '55-57', dialogues: [
        { speaker: 'Wu Binbin', text: 'Look at the traffic lights.', cn: '看红绿灯。' },
        { speaker: 'Mike', text: 'Red means "stop".', cn: '红色表示"停"。' },
        { speaker: 'Wu Binbin', text: 'Green means "go".', cn: '绿色表示"走"。' },
        { speaker: 'Mike', text: 'Yellow means "wait".', cn: '黄色表示"等一等"。' },
        { speaker: '', text: 'The sky is blue.', cn: '天空是蓝色的。' },
        { speaker: '', text: 'The grass is green.', cn: '草地是绿色的。' },
        { speaker: '', text: 'The sun is yellow.', cn: '太阳是黄色的。' },
        { speaker: '', text: 'What a colourful world!', cn: '多么五彩缤纷的世界啊！' },
      ]},
      { type: 'story', title: 'Part C', page: '58-61', dialogues: [
        { speaker: 'Zip', text: 'Look at the rainbow!', cn: '看彩虹！' },
        { speaker: 'Zoom', text: 'Red, orange, yellow, green, blue, purple!', cn: '红橙黄绿蓝紫！' },
        { speaker: 'Zip', text: 'Nature is so beautiful!', cn: '大自然太美了！' },
      ]}
    ]
  },
  // Unit 6: Eating happily (62-73)
  {
    title: 'Unit 6 Eating happily',
    page: '62-73',
    sections: [
      { type: 'warmup', title: 'Warm-up', page: '62-63', dialogues: [
        { speaker: '', text: 'I like food!', cn: '我喜欢食物！' },
        { speaker: '', text: 'What food do you like?', cn: '你喜欢什么食物？' },
        { speaker: '', text: 'Let\'s eat happily!', cn: '开心地吃吧！' },
      ]},
      { type: 'part', title: 'Part A', page: '64-66', dialogues: [
        { speaker: 'Mike', text: 'I\'m hungry, Mum.', cn: '妈妈，我饿了。' },
        { speaker: 'Mum', text: 'What would you like to eat?', cn: '你想吃什么？' },
        { speaker: 'Mike', text: 'I\'d like some bread and milk, please.', cn: '我想要一些面包和牛奶。' },
        { speaker: 'Mum', text: 'Here you are.', cn: '给你。' },
        { speaker: 'Mike', text: 'Thank you, Mum.', cn: '谢谢你，妈妈。' },
        { speaker: '', text: 'Can I have some eggs?', cn: '我能吃些鸡蛋吗？' },
        { speaker: '', text: 'I\'d like some bread.', cn: '我想要一些面包。' },
        { speaker: '', text: 'I\'d like some milk.', cn: '我想要一些牛奶。' },
        { speaker: '', text: 'I\'d like some cake.', cn: '我想要一些蛋糕。' },
      ]},
      { type: 'part', title: 'Part B', page: '67-69', dialogues: [
        { speaker: 'Chen Jie', text: 'Do you like vegetables?', cn: '你喜欢蔬菜吗？' },
        { speaker: 'Sarah', text: 'Yes, I do. Vegetables are good for us.', cn: '是的。蔬菜对我们有好处。' },
        { speaker: 'Chen Jie', text: 'Do you like candy?', cn: '你喜欢糖果吗？' },
        { speaker: 'Sarah', text: 'A little. Too much candy is not good.', cn: '一点点。吃太多糖不好。' },
        { speaker: 'Chen Jie', text: 'Eat well and stay healthy!', cn: '好好吃饭，保持健康！' },
        { speaker: '', text: 'Eat some rice.', cn: '吃些米饭。' },
        { speaker: '', text: 'Eat some vegetables.', cn: '吃些蔬菜。' },
        { speaker: '', text: 'Drink some water.', cn: '喝些水。' },
        { speaker: '', text: 'Have some fruit.', cn: '吃些水果。' },
        { speaker: '', text: 'Healthy food makes us strong!', cn: '健康的食物让我们强壮！' },
      ]},
      { type: 'story', title: 'Part C', page: '70-73', dialogues: [
        { speaker: 'Zoom', text: 'What\'s for dinner?', cn: '晚饭吃什么？' },
        { speaker: 'Zip', text: 'Rice, chicken and vegetables.', cn: '米饭、鸡肉和蔬菜。' },
        { speaker: 'Zoom', text: 'Yummy! Let\'s eat together!', cn: '好吃！我们一起吃吧！' },
      ]}
    ]
  },
  ]},


  // ========== 三年级下册 ==========
  { title: '三年级下册', units: [
  {
    title: 'Unit 1 Welcome back to school!',
    page: 'P2-11',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Boya', text: 'Boys and girls, we have two new friends today.', cn: '同学们，今天我们有两个新朋友。' },
          { speaker: 'Amy', text: 'Hi, I\'m Amy. I\'m from the UK.', cn: '你好，我是Amy。我来自英国。' },
          { speaker: 'Zhang Peng', text: 'Hi, I\'m Zhang Peng. I\'m from Shandong.', cn: '你好，我是张鹏。我来自山东。' },
          { speaker: 'Students', text: 'Welcome!', cn: '欢迎！' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'I\'m from China.', cn: '我来自中国。' },
          { speaker: '', text: 'I\'m from the UK.', cn: '我来自英国。' },
          { speaker: '', text: 'I\'m from the USA.', cn: '我来自美国。' },
          { speaker: '', text: 'I\'m from Canada.', cn: '我来自加拿大。' },
          { speaker: '', text: 'I\'m from Australia.', cn: '我来自澳大利亚。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 2 My family',
    page: 'P12-21',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Chen Jie', text: 'Who\'s that man?', cn: '那位男士是谁？' },
          { speaker: 'Amy', text: 'He\'s my father.', cn: '他是我的爸爸。' },
          { speaker: 'Chen Jie', text: 'Hi, Dad. Nice to meet you.', cn: '你好，爸爸。很高兴见到你。' },
          { speaker: 'Dad', text: 'Nice to meet you, too.', cn: '我也很高兴见到你。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'This is my father.', cn: '这是我的爸爸。' },
          { speaker: '', text: 'This is my mother.', cn: '这是我的妈妈。' },
          { speaker: '', text: 'This is my grandfather.', cn: '这是我的爷爷。' },
          { speaker: '', text: 'This is my grandmother.', cn: '这是我的奶奶。' },
          { speaker: '', text: 'This is my brother.', cn: '这是我的兄弟。' },
          { speaker: '', text: 'This is my sister.', cn: '这是我的姐妹。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 3 At the zoo',
    page: 'P22-31',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Miss White', text: 'Look at that giraffe.', cn: '看那只长颈鹿。' },
          { speaker: 'Amy', text: 'Wow! It\'s so tall!', cn: '哇！它好高啊！' },
          { speaker: 'Zhang Peng', text: 'Look at that elephant.', cn: '看那只大象。' },
          { speaker: 'Sarah', text: 'It\'s so big!', cn: '它好大啊！' },
          { speaker: 'Miss White', text: 'It has a long nose.', cn: '它有一个长鼻子。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'It\'s tall.', cn: '它很高。' },
          { speaker: '', text: 'It\'s short.', cn: '它很矮。' },
          { speaker: '', text: 'It\'s fat.', cn: '它很胖。' },
          { speaker: '', text: 'It\'s thin.', cn: '它很瘦。' },
          { speaker: '', text: 'It has a long nose.', cn: '它有一个长鼻子。' },
          { speaker: '', text: 'It has a short tail.', cn: '它有一条短尾巴。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 4 Where is my car?',
    page: 'P32-41',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Zhang Peng', text: 'Let\'s go home!', cn: '我们回家吧！' },
          { speaker: 'Zhang Peng', text: 'Uh-oh! Where is my pencil box?', cn: '哦不！我的铅笔盒在哪里？' },
          { speaker: 'Amy', text: 'Look! It\'s in your desk.', cn: '看！它在你的书桌里。' },
          { speaker: 'Zhang Peng', text: 'Oh, yes!', cn: '哦，是的！' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'Where is the ruler?', cn: '尺子在哪里？' },
          { speaker: '', text: 'It\'s on the desk.', cn: '它在书桌上。' },
          { speaker: '', text: 'It\'s under the chair.', cn: '它在椅子下面。' },
          { speaker: '', text: 'It\'s in the bag.', cn: '它在书包里。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 5 Do you like pears?',
    page: 'P42-51',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Sarah', text: 'Honey, let\'s buy some fruit.', cn: '亲爱的，我们买些水果吧。' },
          { speaker: 'Mum', text: 'Do you like oranges?', cn: '你喜欢橙子吗？' },
          { speaker: 'Sarah', text: 'No, I don\'t.', cn: '不，我不喜欢。' },
          { speaker: 'Mum', text: 'Do you like pears?', cn: '你喜欢梨吗？' },
          { speaker: 'Sarah', text: 'Yes, I do.', cn: '是的，我喜欢。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'Do you like apples?', cn: '你喜欢苹果吗？' },
          { speaker: '', text: 'Yes, I do. / No, I don\'t.', cn: '是的，我喜欢。/ 不，我不喜欢。' },
          { speaker: '', text: 'I like grapes.', cn: '我喜欢葡萄。' },
          { speaker: '', text: 'I don\'t like bananas.', cn: '我不喜欢香蕉。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 6 How many?',
    page: 'P52-61',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Amy', text: 'Look at the kites!', cn: '看那些风筝！' },
          { speaker: 'Zhang Peng', text: 'Wow, so beautiful!', cn: '哇，好漂亮！' },
          { speaker: 'Amy', text: 'How many kites do you see?', cn: '你看到多少只风筝？' },
          { speaker: 'Zhang Peng', text: '1, 2, 3... I see 12!', cn: '一、二、三…我看到十二只！' },
          { speaker: 'Amy', text: 'No, the black one is a bird!', cn: '不，那只黑色的是一只鸟！' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'How many cars do you see?', cn: '你看到多少辆小汽车？' },
          { speaker: '', text: 'I see eleven.', cn: '我看到十一辆。' },
          { speaker: '', text: 'How many birds do you see?', cn: '你看到多少只鸟？' },
          { speaker: '', text: 'I see twenty.', cn: '我看到二十只。' }
        ]
      }
    ]
  }]},

  // ========== 四年级上册 ==========
  { title: '四年级上册', units: [
  {
    title: 'Unit 1 My classroom',
    page: 'P2-11',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Sarah', text: 'Hey, Zhang Peng. We have a new classroom.', cn: '嘿，张鹏。我们有一个新教室。' },
          { speaker: 'Zhang Peng', text: 'Really? What\'s in the classroom?', cn: '真的吗？教室里有什么？' },
          { speaker: 'Sarah', text: 'Let\'s go and see!', cn: '我们去看看吧！' },
          { speaker: 'Zhang Peng', text: 'It\'s so big!', cn: '好大啊！' },
          { speaker: 'Sarah', text: 'Look! My picture is on the wall.', cn: '看！我的画在墙上。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'What\'s in the classroom?', cn: '教室里有什么？' },
          { speaker: '', text: 'One blackboard, one TV, many desks and chairs.', cn: '一块黑板、一台电视、许多桌椅。' },
          { speaker: '', text: 'The door is orange.', cn: '门是橙色的。' },
          { speaker: '', text: 'The window is green.', cn: '窗户是绿色的。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 2 My schoolbag',
    page: 'P12-21',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Amy', text: 'Hi, Chen Jie. I have a new schoolbag.', cn: '嗨，陈洁。我有一个新书包。' },
          { speaker: 'Chen Jie', text: 'Really? What colour is it?', cn: '真的吗？它是什么颜色的？' },
          { speaker: 'Amy', text: 'It\'s black and white.', cn: '黑白相间的。' },
          { speaker: 'Chen Jie', text: 'An English book, a maths book, three storybooks and...', cn: '一本英语书、一本数学书、三本故事书还有…' },
          { speaker: 'Amy', text: 'It\'s a fat panda!', cn: '是一只胖熊猫！' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'What\'s in your schoolbag?', cn: '你的书包里有什么？' },
          { speaker: '', text: 'A Chinese book.', cn: '一本语文书。' },
          { speaker: '', text: 'A maths book, an English book.', cn: '一本数学书，一本英语书。' },
          { speaker: '', text: 'Put your notebook on the desk.', cn: '把笔记本放在书桌上。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 3 My friends',
    page: 'P22-31',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'John', text: 'Mum, I have a new friend.', cn: '妈妈，我有一个新朋友。' },
          { speaker: 'Mum', text: 'Really? A Chinese friend?', cn: '真的吗？一个中国朋友？' },
          { speaker: 'John', text: 'Yes, he\'s very friendly.', cn: '是的，他非常友好。' },
          { speaker: 'Mum', text: 'What\'s his name?', cn: '他叫什么名字？' },
          { speaker: 'John', text: 'His name is Zhang Peng.', cn: '他叫张鹏。' },
          { speaker: 'John', text: 'He\'s tall and strong.', cn: '他又高又壮。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'I have a good friend. He\'s tall and strong.', cn: '我有一个好朋友。他又高又壮。' },
          { speaker: '', text: 'She\'s short and thin.', cn: '她又矮又瘦。' },
          { speaker: '', text: 'He has glasses and his shoes are blue.', cn: '他戴眼镜，他的鞋是蓝色的。' },
          { speaker: '', text: 'She has long hair. She\'s quiet.', cn: '她有一头长发。她很安静。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 4 My home',
    page: 'P32-41',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Amy', text: 'I have a cat. She\'s cute.', cn: '我有一只猫。她很可爱。' },
          { speaker: 'Sarah', text: 'Where is she?', cn: '她在哪里？' },
          { speaker: 'Amy', text: 'Is she in the living room?', cn: '她在客厅吗？' },
          { speaker: 'Sarah', text: 'No, she isn\'t.', cn: '不，她不在。' },
          { speaker: 'Amy', text: 'Is she in the kitchen?', cn: '她在厨房吗？' },
          { speaker: 'Sarah', text: 'Look! She\'s in the study.', cn: '看！她在书房。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'Where\'s the sofa?', cn: '沙发在哪里？' },
          { speaker: '', text: 'It\'s in the living room.', cn: '在客厅里。' },
          { speaker: '', text: 'Where\'s the fridge?', cn: '冰箱在哪里？' },
          { speaker: '', text: 'It\'s in the kitchen.', cn: '在厨房里。' },
          { speaker: '', text: 'Go to the bedroom. Have a nap.', cn: '去卧室。睡一会儿。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 5 Dinner\'s ready',
    page: 'P42-51',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Mum', text: 'What would you like for dinner?', cn: '你晚餐想吃什么？' },
          { speaker: 'Mike', text: 'I\'d like some beef and noodles.', cn: '我想要一些牛肉和面条。' },
          { speaker: 'Mum', text: 'Would you like some soup?', cn: '你想喝些汤吗？' },
          { speaker: 'Mike', text: 'Yes, please.', cn: '好的，谢谢。' },
          { speaker: 'Mum', text: 'Dinner\'s ready!', cn: '晚饭好了！' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'What would you like?', cn: '你想要什么？' },
          { speaker: '', text: 'I\'d like some chicken.', cn: '我想要一些鸡肉。' },
          { speaker: '', text: 'I\'d like some rice and vegetables.', cn: '我想要一些米饭和蔬菜。' },
          { speaker: '', text: 'Pass me the chopsticks, please.', cn: '请递给我筷子。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 6 Meet my family!',
    page: 'P42-51',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Amy', text: 'How many people are there in your family, Chen Jie?', cn: '陈洁，你家有几口人？' },
          { speaker: 'Chen Jie', text: 'Three. My parents and me.', cn: '三口。我的父母和我。' },
          { speaker: 'Amy', text: 'My family has six people.', cn: '我家有六口人。' },
          { speaker: 'Chen Jie', text: 'Six?', cn: '六口？' },
          { speaker: 'Amy', text: 'Yes. My dad, my mum, my sister, my baby brother and me.', cn: '是的。我的爸爸、妈妈、姐姐、小弟弟和我。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'What\'s your father\'s job?', cn: '你爸爸的工作是什么？' },
          { speaker: '', text: 'My father is a doctor.', cn: '我爸爸是一名医生。' },
          { speaker: '', text: 'My uncle is a driver.', cn: '我叔叔是一名司机。' },
          { speaker: '', text: 'My aunt is a nurse.', cn: '我姑姑是一名护士。' },
          { speaker: '', text: 'My cousin is a student.', cn: '我表弟是一名学生。' }
        ]
      }
    ]
  }]},

  // ========== 四年级下册 ==========
  { title: '四年级下册', units: [
  {
    title: 'Unit 1 My school',
    page: 'P2-11',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Chen Jie', text: 'Excuse me. Where\'s the teachers\' office?', cn: '打扰一下，教师办公室在哪里？' },
          { speaker: 'Amy', text: 'It\'s on the second floor.', cn: '在二楼。' },
          { speaker: 'Chen Jie', text: 'Is this the teachers\' office?', cn: '这是教师办公室吗？' },
          { speaker: 'Amy', text: 'No, it isn\'t. The teachers\' office is next to the library.', cn: '不，不是。教师办公室在图书馆旁边。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'Where\'s the library?', cn: '图书馆在哪里？' },
          { speaker: '', text: 'It\'s on the first floor.', cn: '在一楼。' },
          { speaker: '', text: 'Where\'s the art room?', cn: '美术教室在哪里？' },
          { speaker: '', text: 'It\'s next to the music room.', cn: '在音乐教室旁边。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 2 What time is it?',
    page: 'P12-21',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'John', text: 'School is over. Let\'s go to the playground.', cn: '放学了。我们去操场吧。' },
          { speaker: 'Mike', text: 'What time is it now?', cn: '现在几点了？' },
          { speaker: 'John', text: 'It\'s five o\'clock.', cn: '五点了。' },
          { speaker: 'Mike', text: 'Time to go home, kids.', cn: '孩子们，该回家了。' },
          { speaker: 'John', text: 'Oh! Just a minute.', cn: '哦！等一下。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'What time is it?', cn: '几点了？' },
          { speaker: '', text: 'It\'s six o\'clock. It\'s time for dinner.', cn: '六点了。该吃晚饭了。' },
          { speaker: '', text: 'It\'s seven o\'clock. It\'s time to get up.', cn: '七点了。该起床了。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 3 Weather',
    page: 'P22-31',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Mike', text: 'Mum, what time is it?', cn: '妈妈，几点了？' },
          { speaker: 'Mum', text: 'It\'s eleven o\'clock.', cn: '十一点了。' },
          { speaker: 'Mike', text: 'Can I go outside now?', cn: '我现在可以出去吗？' },
          { speaker: 'Mum', text: 'No, you can\'t. It\'s cold outside.', cn: '不，你不能。外面很冷。' },
          { speaker: 'Mike', text: 'What\'s the weather like?', cn: '天气怎么样？' },
          { speaker: 'Mum', text: 'It\'s snowy.', cn: '下雪了。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'It\'s sunny in Beijing.', cn: '北京是晴天。' },
          { speaker: '', text: 'It\'s cloudy in London.', cn: '伦敦是多云。' },
          { speaker: '', text: 'It\'s rainy in Sydney.', cn: '悉尼是雨天。' },
          { speaker: '', text: 'It\'s snowy in Moscow.', cn: '莫斯科是下雪天。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 4 At the farm',
    page: 'P32-41',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Mike', text: 'Look at these! Are these carrots?', cn: '看这些！这些是胡萝卜吗？' },
          { speaker: 'Sarah', text: 'Yes, they are.', cn: '是的，它们是。' },
          { speaker: 'Mike', text: 'Wow! They\'re so big!', cn: '哇！它们好大啊！' },
          { speaker: 'Sarah', text: 'What are these?', cn: '这些是什么？' },
          { speaker: 'Farmer', text: 'They\'re tomatoes.', cn: '它们是西红柿。' },
          { speaker: 'Mike', text: 'But they\'re yellow!', cn: '但它们是黄色的！' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'Are these tomatoes?', cn: '这些是西红柿吗？' },
          { speaker: '', text: 'Yes, they are.', cn: '是的，它们是。' },
          { speaker: '', text: 'Are those horses?', cn: '那些是马吗？' },
          { speaker: '', text: 'No, they aren\'t. They\'re cows.', cn: '不，不是。它们是牛。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 5 My clothes',
    page: 'P42-51',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Amy', text: 'Are these yours?', cn: '这些是你的吗？' },
          { speaker: 'Mike', text: 'No, they aren\'t. My shoes are green.', cn: '不，不是。我的鞋是绿色的。' },
          { speaker: 'Amy', text: 'What about this hat?', cn: '这顶帽子呢？' },
          { speaker: 'Mike', text: 'Is this John\'s?', cn: '这是John的吗？' },
          { speaker: 'Amy', text: 'No, it isn\'t. It\'s Mike\'s.', cn: '不，不是。是Mike的。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'Where are my socks?', cn: '我的袜子在哪儿？' },
          { speaker: '', text: 'What colour are they?', cn: '它们是什么颜色的？' },
          { speaker: '', text: 'Is this your hat?', cn: '这是你的帽子吗？' },
          { speaker: '', text: 'Whose pants are those?', cn: '那条裤子是谁的？' }
        ]
      }
    ]
  },
  {
    title: 'Unit 6 Shopping',
    page: 'P52-61',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Sarah', text: 'Can I help you?', cn: '我能帮你吗？' },
          { speaker: 'Mum', text: 'Yes. These shoes are nice. Can I try them on?', cn: '是的。这双鞋很漂亮。我能试穿一下吗？' },
          { speaker: 'Sarah', text: 'Of course. Here you are.', cn: '当然可以。给你。' },
          { speaker: 'Mum', text: 'They\'re just right! How much are they?', cn: '它们正合适！多少钱？' },
          { speaker: 'Sarah', text: 'They\'re eighty-nine yuan.', cn: '八十九元。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'How much is this skirt?', cn: '这条裙子多少钱？' },
          { speaker: '', text: 'It\'s fifty yuan.', cn: '五十元。' },
          { speaker: '', text: 'How much are these gloves?', cn: '这副手套多少钱？' },
          { speaker: '', text: 'They\'re ten yuan.', cn: '十元。' }
        ]
      }
    ]
  }]},

  // ========== 五年级上册 ==========
  { title: '五年级上册', units: [
  {
    title: 'Unit 1 What\'s he like?',
    page: 'P2-11',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Wu Binbin', text: 'Do you know Mr Young?', cn: '你认识Young老师吗？' },
          { speaker: 'Oliver', text: 'No, I don\'t. Who is he?', cn: '不，不认识。他是谁？' },
          { speaker: 'Wu Binbin', text: 'He\'s our music teacher.', cn: '他是我们的音乐老师。' },
          { speaker: 'Oliver', text: 'Is he young?', cn: '他年轻吗？' },
          { speaker: 'Wu Binbin', text: 'No, he isn\'t. He\'s old.', cn: '不，他不年轻。他老了。' },
          { speaker: 'Oliver', text: 'Is he funny?', cn: '他有趣吗？' },
          { speaker: 'Wu Binbin', text: 'Yes, he is.', cn: '是的，他很有趣。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'Who\'s your art teacher?', cn: '你的美术老师是谁？' },
          { speaker: '', text: 'Mr Jones.', cn: 'Jones老师。' },
          { speaker: '', text: 'Is he young?', cn: '他年轻吗？' },
          { speaker: '', text: 'Yes, he is. He is very kind.', cn: '是的。他非常和蔼。' },
          { speaker: '', text: 'Our maths teacher is strict.', cn: '我们的数学老师很严格。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 2 My week',
    page: 'P2-11',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'John', text: 'Grandpa! Look at my picture.', cn: '爷爷！看我的画。' },
          { speaker: 'Grandpa', text: 'Great! What do you have on Thursdays?', cn: '太棒了！星期四你有什么课？' },
          { speaker: 'John', text: 'I have maths, English and music.', cn: '我有数学、英语和音乐。' },
          { speaker: 'Grandpa', text: 'Do you often read books in this park?', cn: '你经常在这个公园里看书吗？' },
          { speaker: 'John', text: 'No, I don\'t. I often play football here.', cn: '不。我经常在这里踢足球。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'What do you have on Mondays?', cn: '星期一你有什么课？' },
          { speaker: '', text: 'I have Chinese, English, maths and science.', cn: '我有语文、英语、数学和科学。' },
          { speaker: '', text: 'What do you do on Sundays?', cn: '星期天你做什么？' },
          { speaker: '', text: 'I often do my homework.', cn: '我经常做作业。' },
          { speaker: '', text: 'Sometimes I wash my clothes.', cn: '有时候我洗衣服。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 3 What would you like?',
    page: 'P12-21',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Sarah', text: 'What would you like to eat?', cn: '你想吃什么？' },
          { speaker: 'Zhang Peng', text: 'A sandwich, please. It\'s my favourite food.', cn: '请给我一个三明治。它是我最爱的食物。' },
          { speaker: 'Sarah', text: 'What would you like to drink?', cn: '你想喝什么？' },
          { speaker: 'Zhang Peng', text: 'I\'d like some tea. It\'s healthy.', cn: '我想喝些茶。它很健康。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'What\'s your favourite food?', cn: '你最喜欢的食物是什么？' },
          { speaker: '', text: 'Ice cream. It\'s sweet.', cn: '冰淇淋。它很甜。' },
          { speaker: '', text: 'Noodles are delicious.', cn: '面条很美味。' },
          { speaker: '', text: 'Fresh vegetables are healthy.', cn: '新鲜蔬菜很健康。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 4 What can you do?',
    page: 'P22-31',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Miss White', text: 'We\'ll have an English party next Tuesday.', cn: '下周二我们要举办英语派对。' },
          { speaker: 'Zhang Peng', text: 'What can you do for the party?', cn: '你能为派对做什么？' },
          { speaker: 'Chen Jie', text: 'I can play the pipa.', cn: '我会弹琵琶。' },
          { speaker: 'Mike', text: 'I can draw cartoons.', cn: '我会画卡通画。' },
          { speaker: 'John', text: 'I can do some kung fu.', cn: '我会一些功夫。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'What can you do?', cn: '你会做什么？' },
          { speaker: '', text: 'I can sing English songs.', cn: '我会唱英文歌。' },
          { speaker: '', text: 'Can you swim?', cn: '你会游泳吗？' },
          { speaker: '', text: 'Yes, I can. / No, I can\'t.', cn: '是的，我会。/ 不，我不会。' },
          { speaker: '', text: 'I can cook, but I can\'t play basketball.', cn: '我会做饭，但我不会打篮球。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 5 There is a big bed',
    page: 'P32-41',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Zhang Peng', text: 'Look! This is my room.', cn: '看！这是我的房间。' },
          { speaker: 'Mike', text: 'There is a big bed.', cn: '有一张大床。' },
          { speaker: 'Zhang Peng', text: 'Yes. I like my bed.', cn: '是的。我喜欢我的床。' },
          { speaker: 'Mike', text: 'There is a nice photo on the wall.', cn: '墙上有一张漂亮的照片。' },
          { speaker: 'Zhang Peng', text: 'That\'s my grandparents\' garden.', cn: '那是我爷爷奶奶的花园。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'There is a clock on the wall.', cn: '墙上有一个钟。' },
          { speaker: '', text: 'There are some flowers near the window.', cn: '窗户附近有一些花。' },
          { speaker: '', text: 'This is the living room.', cn: '这是客厅。' },
          { speaker: '', text: 'There are so many pictures here.', cn: '这里有这么多画。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 6 In a nature park',
    page: 'P42-51',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Miss White', text: 'Children, let\'s go to the forest!', cn: '孩子们，我们去森林吧！' },
          { speaker: 'Zhang Peng', text: 'Is there a river in the forest?', cn: '森林里有河吗？' },
          { speaker: 'Miss White', text: 'No, there isn\'t. But there is a lake.', cn: '不，没有。但有一个湖。' },
          { speaker: 'Chen Jie', text: 'Are there any boats on the lake?', cn: '湖上有船吗？' },
          { speaker: 'Miss White', text: 'Yes, there are some small boats.', cn: '是的，有一些小船。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'Is there a mountain near the village?', cn: '村庄附近有山吗？' },
          { speaker: '', text: 'Yes, there is.', cn: '是的，有。' },
          { speaker: '', text: 'Are there any tall buildings?', cn: '有高楼吗？' },
          { speaker: '', text: 'No, there aren\'t.', cn: '不，没有。' },
          { speaker: '', text: 'The nature park is so quiet!', cn: '自然公园好安静！' }
        ]
      }
    ]
  }]},

    // ========== 五年级下册（2012版） ==========
{ title: '五年级下册', units: [
  {
    title: "Unit 1 My day",
    page: "P2-13",
    sections: [
      {
        type: "try",
        title: "A Let's try",
        page: "P4",
        dialogues: [
          { text: 'Pedro is a new student from Spain.', cn: '佩德罗是来自西班牙的新生。' },
          { speaker: 'Zhang Peng', text: 'Pedro, this is our new classroom. Do you like our school?', cn: '佩德罗，这是我们的新教室。你喜欢我们学校吗？' },
          { speaker: 'Pedro', text: 'Yes, but I\'m tired. In Spain, I always sleep a little in the afternoon.', cn: '是的，但我很累。在西班牙，我下午总是睡一会儿。' },
          { speaker: 'Zhang Peng', text: 'Really? When do you sleep?', cn: '真的吗？你什么时候睡？' },
          { speaker: 'Pedro', text: 'At about 2 o\'clock.', cn: '大约两点。' },
          { speaker: 'Zhang Peng', text: 'Oh. That\'s now, but we have a maths class at 2 o\'clock.', cn: '哦。就是现在，但我们两点有数学课。' },
        ]
      },
      {
        type: "talk",
        title: "A Let's talk",
        page: "P4",
        dialogues: [
          { speaker: 'Zhang Peng', text: 'When do you finish class in the morning?', cn: '你上午什么时候下课？' },
          { speaker: 'Pedro', text: 'We finish class at 1 o\'clock. Then we eat lunch at home.', cn: '我们一点下课。然后在家吃午饭。' },
          { speaker: 'Zhang Peng', text: 'Wow! When do you go back to school after lunch?', cn: '哇！午饭后你们什么时候回学校？' },
          { speaker: 'Pedro', text: 'At 2:30. Classes start at 3 o\'clock.', cn: '两点半。三点开始上课。' },
          { speaker: 'Zhang Peng', text: 'When do you usually eat dinner in Spain?', cn: '在西班牙你通常什么时候吃晚饭？' },
          { speaker: 'Pedro', text: 'Usually at 9:30 or 10 o\'clock.', cn: '通常九点半或十点。' },
          { speaker: 'Zhang Peng', text: 'Wow! That\'s too late!', cn: '哇！那太晚了！' },
        ]
      },
      {
        type: "learn",
        title: "A Let's learn",
        page: "P5",
        dialogues: [
          { text: 'eat breakfast / have...class / play sports / exercise / do morning exercises / eat dinner', cn: '吃早饭 / 上课 / 做运动 / 活动 / 做早操 / 吃晚饭' },
          { speaker: 'A', text: 'When do you do morning exercises?', cn: '你什么时候做早操？' },
          { speaker: 'B', text: 'At 7 o\'clock.', cn: '七点。' },
        ]
      },
      {
        type: "exercise",
        title: "A Ask and write",
        page: "P5",
        dialogues: [
          { text: 'Ask your partner about his/her timetable and write it down.', cn: '询问同伴的时间表并写下来。' },
        ]
      },
      {
        type: "spell",
        title: "A Let's spell",
        page: "P6",
        dialogues: [
          { text: 'cl /kl/: clean, clock, class, clever', cn: 'cl 发 /kl/ 音' },
          { text: 'pl /pl/: plate, eggplant, please, play', cn: 'pl 发 /pl/ 音' },
          { text: 'Please clean your plate.', cn: '请把盘子洗干净。' },
          { text: 'Class, please play the clock.', cn: '同学们，请玩这个钟。' },
        ]
      },
      {
        type: "try",
        title: "B Let's try",
        page: "P7",
        dialogues: [
          { speaker: 'Sarah', text: 'Hello, Mrs Green. Good to see you!', cn: '你好，格林太太。很高兴见到你！' },
          { speaker: 'Shopkeeper', text: 'Hi, Sarah. Welcome to our shop again.', cn: '你好，Sarah。欢迎再次光临。' },
          { speaker: 'Sarah', text: 'I want to buy some vegetables.', cn: '我想买些蔬菜。' },
          { speaker: 'Shopkeeper', text: 'Here are some fresh carrots. You don\'t often shop here on Saturdays.', cn: '这里有一些新鲜胡萝卜。你周六不常来。' },
          { speaker: 'Sarah', text: 'No, not often.', cn: '是的，不经常。' },
        ]
      },
      {
        type: "talk",
        title: "B Let's talk",
        page: "P7",
        dialogues: [
          { speaker: 'Shopkeeper', text: 'Why are you shopping today?', cn: '你今天为什么来购物？' },
          { speaker: 'Sarah', text: 'My mum worked last night. So I\'m shopping today.', cn: '我妈妈昨晚工作了。所以我今天来购物。' },
          { speaker: 'Shopkeeper', text: 'Good girl! So what do you do on the weekend?', cn: '好孩子！那你周末做什么？' },
          { speaker: 'Sarah', text: 'I often watch TV and play ping-pong with my father.', cn: '我经常看电视，和爸爸打乒乓球。' },
          { speaker: 'Shopkeeper', text: 'That sounds like a lot of fun.', cn: '听起来很好玩。' },
          { speaker: 'Sarah', text: 'Yes, but I\'m also hard-working. I usually wash my clothes. Sometimes I cook dinner.', cn: '是的，但我也很勤奋。我通常洗衣服，有时做晚饭。' },
          { speaker: 'Shopkeeper', text: 'You\'re so busy! You need a robot to help you!', cn: '你这么忙！你需要一个机器人帮你！' },
        ]
      },
      {
        type: "learn",
        title: "B Let's learn",
        page: "P8",
        dialogues: [
          { text: 'clean my room / go for a walk / go shopping / take a dancing class', cn: '打扫房间 / 散步 / 购物 / 上舞蹈课' },
          { speaker: 'A', text: 'What do you do on the weekend?', cn: '你周末做什么？' },
          { speaker: 'B', text: 'I often clean my room on Saturdays.', cn: '我周六经常打扫房间。' },
          { speaker: 'A', text: 'And on Sundays?', cn: '那周日呢？' },
          { speaker: 'B', text: 'I usually go for a walk.', cn: '我通常去散步。' },
        ]
      },
      {
        type: "exercise",
        title: "B Do a survey",
        page: "P8",
        dialogues: [
          { text: 'Look, tick and write. What do your friends do on weekends?', cn: '看一看，勾选并写下来。你的朋友周末做什么？' },
        ]
      },
      {
        type: "read",
        title: "B Read and write",
        page: "P9-10",
        dialogues: [
          { text: 'Robin\'s play', cn: 'Robin的戏剧' },
          { text: 'Robin is in a play. He is Robinson Crusoe. Here is a letter from him.', cn: 'Robin在演一出戏。他是鲁滨逊·克鲁索。这是他的一封信。' },
          { speaker: 'Robinson', text: 'My name is Robinson. I live on an island. I always get up early every day. I wash my face, and then I eat breakfast. Sometimes I clean my cave, too.', cn: '我叫Robinson。我住在一个岛上。我每天很早起床。我洗脸，然后吃早饭。有时我也打扫我的山洞。' },
          { speaker: 'Robinson', text: 'I often go swimming in the water. In the afternoon, I play sports with my friend. His name is Friday.', cn: '我经常去水里游泳。下午我和我的朋友一起运动。他叫Friday。' },
          { speaker: 'Robinson', text: 'Friday is good at sports. He often wins.', cn: 'Friday很擅长运动，他经常赢。' },
        ]
      },
      {
        type: "check",
        title: "Let's check",
        page: "P11",
        dialogues: [
          { speaker: 'Amy', text: 'Mike, let\'s go swimming on the weekend.', cn: 'Mike，我们周末去游泳吧。' },
          { speaker: 'Mike', text: 'I\'m sorry. I can\'t.', cn: '对不起，我不能去。' },
          { speaker: 'Amy', text: 'Why not?', cn: '为什么？' },
          { speaker: 'Mike', text: 'I always clean my room and do my homework on the weekend.', cn: '我周末总要打扫房间和做作业。' },
          { speaker: 'Amy', text: 'OK.', cn: '好吧。' },
          { speaker: 'Mike', text: 'Have fun!', cn: '玩得开心！' },
        ]
      },
      {
        type: "story",
        title: "C Story time",
        page: "P12-13",
        dialogues: [
          { speaker: 'Zoom', text: 'What do you usually do on Mondays, Zip?', cn: 'Zip，你周一通常做什么？' },
          { speaker: 'Zip', text: 'I usually collect nuts. From Monday to Wednesday, I collect nuts.', cn: '我通常收集坚果。周一到周三，我收集坚果。' },
          { speaker: 'Zoom', text: 'What do you do on Thursday?', cn: '周四你做什么？' },
          { speaker: 'Zip', text: 'On Thursday, I dry nuts in the sun.', cn: '周四，我在阳光下晒坚果。' },
          { speaker: 'Zoom', text: 'And on Friday?', cn: '周五呢？' },
          { speaker: 'Zip', text: 'On Friday, I eat nuts with my friends.', cn: '周五，我和朋友们一起吃坚果。' },
          { speaker: 'Zoom', text: 'What do you do on the weekend?', cn: '你周末做什么？' },
          { speaker: 'Zip', text: 'On the weekend, I often watch TV. But this weekend I have a show. I\'ll play the pipa.', cn: '周末我经常看电视。但这周末我有一场演出，我要弹琵琶。' },
          { speaker: 'Zoom', text: 'Wow! You\'re so busy! I hope you have a great show!', cn: '哇！你真忙！祝你演出成功！' },
        ]
      }
    ]
  },
  {
    title: "Unit 2 My favourite season",
    page: "P14-25",
    sections: [
      {
        type: "try",
        title: "A Let's try",
        page: "P16",
        dialogues: [
          { speaker: 'Mike', text: 'It\'s a windy day.', cn: '今天有风。' },
          { speaker: 'Chen Jie', text: 'Yes. It\'s cold, too.', cn: '是的，还很冷。' },
          { speaker: 'Mike', text: 'What\'s your favourite season, Chen Jie?', cn: '陈洁，你最喜欢哪个季节？' },
          { speaker: 'Chen Jie', text: 'Autumn. It is beautiful here in Beijing.', cn: '秋天。北京的秋天很美。' },
        ]
      },
      {
        type: "talk",
        title: "A Let's talk",
        page: "P16",
        dialogues: [
          { speaker: 'Mr Jones', text: 'Do you like the music, children?', cn: '孩子们，你们喜欢这首音乐吗？' },
          { speaker: 'Mike', text: 'Yes. It\'s very beautiful. What is it?', cn: '是的，它很美。这是什么？' },
          { speaker: 'Mr Jones', text: 'The Four Seasons. Today we\'ll draw the seasons.', cn: '《四季》。今天我们来画一画季节。' },
          { speaker: 'Mr Jones', text: 'Which season do you like best, Mike?', cn: '你最喜欢哪个季节，Mike？' },
          { speaker: 'Mike', text: 'Winter. I like snow.', cn: '冬天。我喜欢雪。' },
          { speaker: 'Mr Jones', text: 'I like snow, too. Which season do you like best, Wu Yifan?', cn: '我也喜欢雪。吴一凡，你最喜欢哪个季节？' },
          { speaker: 'Wu Yifan', text: 'Spring. It\'s pretty.', cn: '春天。它很美。' },
          { speaker: 'Mr Jones', text: 'Yes, it is.', cn: '是的。' },
        ]
      },
      {
        type: "learn",
        title: "A Let's learn",
        page: "P17",
        dialogues: [
          { text: 'spring / summer / autumn / winter / season', cn: '春天 / 夏天 / 秋天 / 冬天 / 季节' },
          { speaker: 'A', text: 'Which season do you like best?', cn: '你最喜欢哪个季节？' },
          { speaker: 'B', text: 'Summer. I can go swimming every day.', cn: '夏天。我可以每天去游泳。' },
        ]
      },
      {
        type: "exercise",
        title: "A Read and match",
        page: "P17",
        dialogues: [
          { text: 'Read and match. Spring is green with flowers and songs. Summer is hot and the days are long. Autumn is golden and farmers are busy. Winter is white and the year is gone.', cn: '读一读并配对。春天绿意盎然，鲜花盛开，歌声飘扬。夏天炎热，白天很长。秋天金黄，农民很忙。冬天雪白，一年过去了。' },
        ]
      },
      {
        type: "spell",
        title: "A Let's spell",
        page: "P18",
        dialogues: [
          { text: 'br /br/: brown, library, brother, umbrella', cn: 'br 发 /br/ 音' },
          { text: 'gr /gr/: green, grapes, grandpa, grow', cn: 'gr 发 /gr/ 音' },
          { text: 'Grandpa grows green grapes.', cn: '爷爷种绿色的葡萄。' },
          { text: 'My brother has a brown umbrella in the library.', cn: '我哥哥在图书馆有一把棕色伞。' },
        ]
      },
      {
        type: "try",
        title: "B Let's try",
        page: "P19",
        dialogues: [
          { speaker: 'Zhang Peng', text: 'Look at my picture, John.', cn: 'John，看我的画。' },
          { speaker: 'John', text: 'It\'s pretty. So you like spring best?', cn: '很漂亮。所以你最喜欢春天？' },
          { speaker: 'Zhang Peng', text: 'Yes. Spring is beautiful. There are lots of flowers. The trees are green.', cn: '是的。春天很美。有很多花，树也绿了。' },
        ]
      },
      {
        type: "talk",
        title: "B Let's talk",
        page: "P19",
        dialogues: [
          { speaker: 'Amy', text: 'Hello, Miss White. Look at my picture.', cn: '你好，怀特老师。看我的画。' },
          { speaker: 'Miss White', text: 'Good job! I like the trees. The colours are very pretty!', cn: '画得好！我喜欢这些树。颜色很漂亮！' },
          { speaker: 'Amy', text: 'Yes. I like autumn best. The weather is good and the colours are beautiful!', cn: '是的，我最喜欢秋天。天气好，颜色也很美！' },
          { speaker: 'Amy', text: 'Which season do you like best, Miss White?', cn: '怀特老师，你最喜欢哪个季节？' },
          { speaker: 'Miss White', text: 'Summer.', cn: '夏天。' },
          { speaker: 'Amy', text: 'Why?', cn: '为什么？' },
          { speaker: 'Miss White', text: 'Because I like summer vacation!', cn: '因为我喜欢暑假！' },
        ]
      },
      {
        type: "learn",
        title: "B Let's learn",
        page: "P20",
        dialogues: [
          { text: 'go on a picnic / go swimming / pick apples / make a snowman', cn: '去野餐 / 去游泳 / 摘苹果 / 堆雪人' },
          { speaker: 'A', text: 'Which season do you like best?', cn: '你最喜欢哪个季节？' },
          { speaker: 'B', text: 'I like spring best. I often go on a picnic with my family.', cn: '我最喜欢春天。我经常和家人去野餐。' },
        ]
      },
      {
        type: "exercise",
        title: "B Ask and answer",
        page: "P20",
        dialogues: [
          { text: 'Ask and answer about which season you like best and why.', cn: '互相问答最喜欢哪个季节及原因。' },
        ]
      },
      {
        type: "read",
        title: "B Read and write",
        page: "P21-22",
        dialogues: [
          { text: 'Robin likes them all!', cn: 'Robin全都喜欢！' },
          { speaker: 'Robin', text: 'Look at the green trees and pink flowers. I like spring because there are beautiful flowers everywhere.', cn: '看绿色的树和粉色的花。我喜欢春天，因为到处都有美丽的花。' },
          { speaker: 'Robin', text: 'The weather is hot, hot, hot! I like summer, but I can\'t swim.', cn: '天气好热，好热，好热！我喜欢夏天，但我不会游泳。' },
          { speaker: 'Robin', text: 'What lovely colours! The leaves fall and fall and fall. I love fall!', cn: '多美的颜色啊！叶子落啊落。我爱秋天！' },
          { speaker: 'Robin', text: 'Wow! I want to paint a picture, too! There is lots of snow. It is white everywhere. I like winter because I can play in the snow.', cn: '哇！我也想去画一幅画！到处都是雪，到处白茫茫。我喜欢冬天，因为我可以在雪里玩。' },
        ]
      },
      {
        type: "check",
        title: "Let's check",
        page: "P23",
        dialogues: [
          { speaker: 'Boy', text: 'When is your birthday?', cn: '你的生日是什么时候？' },
          { speaker: 'Girl', text: 'It\'s in summer.', cn: '在夏天。' },
          { speaker: 'Boy', text: 'Do you like summer?', cn: '你喜欢夏天吗？' },
          { speaker: 'Girl', text: 'No, I don\'t. It\'s too hot.', cn: '不，我不喜欢。太热了。' },
          { speaker: 'Boy', text: 'Which season do you like best?', cn: '你最喜欢哪个季节？' },
          { speaker: 'Girl', text: 'Autumn. The colours are beautiful. I can pick fresh apples.', cn: '秋天。颜色很美。我可以摘新鲜的苹果。' },
        ]
      },
      {
        type: "story",
        title: "C Story time",
        page: "P24-25",
        dialogues: [
          { speaker: 'Zip', text: 'Welcome! Welcome to our home!', cn: '欢迎！欢迎来到我们家！' },
          { speaker: 'Koala', text: 'Thank you. What do you usually do on Christmas Day?', cn: '谢谢。你们圣诞节通常做什么？' },
          { speaker: 'Zoom', text: 'We usually have a big dinner. I like Christmas best. Merry Christmas!', cn: '我们通常吃一顿大餐。我最喜欢圣诞节。圣诞快乐！' },
          { speaker: 'Koala', text: 'Christmas is in summer in Australia, so we never have snow for Christmas.', cn: '在澳大利亚，圣诞节在夏天，所以我们从没有过下雪的圣诞节。' },
          { speaker: 'Zoom', text: 'You swim in winter?', cn: '你们冬天游泳？' },
          { speaker: 'Koala', text: 'Yes. Which season do you like best?', cn: '是的。你最喜欢哪个季节？' },
          { speaker: 'Zoom', text: 'Summer. I like summer vacation!', cn: '夏天。我喜欢暑假！' },
          { speaker: 'Koala', text: 'Me, too! Cheese!', cn: '我也是！茄子！' },
        ]
      }
    ]
  },
  {
    title: "Unit 3 My school calendar",
    page: "P26-37",
    sections: [
      {
        type: "try",
        title: "A Let's try",
        page: "P28",
        dialogues: [
          { speaker: 'Mike', text: 'What\'s that, Zhang Peng?', cn: '张鹏，那是什么？' },
          { speaker: 'Zhang Peng', text: 'It\'s an invitation for my mum and dad.', cn: '是给我爸妈的邀请函。' },
          { speaker: 'Mike', text: 'What for?', cn: '做什么用的？' },
          { speaker: 'Zhang Peng', text: 'For the sports meet next week. I will run.', cn: '下周的运动会。我要跑步。' },
          { speaker: 'Mike', text: 'I see. Good luck!', cn: '我明白了。祝你好运！' },
          { speaker: 'Zhang Peng', text: 'Thank you!', cn: '谢谢！' },
        ]
      },
      {
        type: "talk",
        title: "A Let's talk",
        page: "P28",
        dialogues: [
          { speaker: 'Mike', text: 'We have a few fun things in spring.', cn: '春天我们有一些有趣的事。' },
          { speaker: 'Zhang Peng', text: 'After the sports meet, we have an Easter party.', cn: '运动会之后，我们有一个复活节派对。' },
          { speaker: 'Mike', text: 'When is the party?', cn: '派对是什么时候？' },
          { speaker: 'Zhang Peng', text: 'It\'s in April. We have a school trip, too.', cn: '在四月。我们还有一次学校旅行。' },
          { speaker: 'Mike', text: 'When is that?', cn: '那是什么时候？' },
          { speaker: 'Zhang Peng', text: 'It\'s in May.', cn: '在五月。' },
          { speaker: 'Mike', text: 'Cool! I love the school trip!', cn: '太酷了！我喜欢学校旅行！' },
        ]
      },
      {
        type: "learn",
        title: "A Let's learn",
        page: "P29",
        dialogues: [
          { text: 'January / February / March / April / May / June', cn: '一月 / 二月 / 三月 / 四月 / 五月 / 六月' },
          { speaker: 'A', text: 'When is Tree Planting Day?', cn: '植树节是什么时候？' },
          { speaker: 'B', text: 'It\'s in March.', cn: '在三月。' },
          { speaker: 'A', text: 'When is Children\'s Day?', cn: '儿童节是什么时候？' },
          { speaker: 'B', text: 'It\'s in June.', cn: '在六月。' },
        ]
      },
      {
        type: "exercise",
        title: "A Read and say",
        page: "P29",
        dialogues: [
          { text: 'Read the sentences and say the months.', cn: '读句子并说出月份。' },
        ]
      },
      {
        type: "spell",
        title: "A Let's spell",
        page: "P30",
        dialogues: [
          { text: 'ch /tʃ/: China, chicken, lunch, teacher', cn: 'ch 发 /tʃ/ 音' },
          { text: 'sh /ʃ/: sheep, fish, shirt, shorts', cn: 'sh 发 /ʃ/ 音' },
          { text: 'The teacher has chicken for lunch.', cn: '老师午餐吃鸡肉。' },
          { text: 'The sheep in a shirt eats fresh fish.', cn: '穿衬衫的羊吃鲜鱼。' },
        ]
      },
      {
        type: "try",
        title: "B Let's try",
        page: "P31",
        dialogues: [
          { speaker: 'Oliver', text: 'Today is my birthday.', cn: '今天是我的生日。' },
          { speaker: 'Chen Jie', text: 'Really? Happy birthday!', cn: '真的吗？生日快乐！' },
          { speaker: 'Oliver', text: 'Thanks.', cn: '谢谢。' },
          { speaker: 'Chen Jie', text: 'What will you do today?', cn: '你今天要做什么？' },
          { speaker: 'Oliver', text: 'I will have a party. Please come.', cn: '我要举办一个派对。请来吧。' },
          { speaker: 'Chen Jie', text: 'I will.', cn: '我会的。' },
        ]
      },
      {
        type: "talk",
        title: "B Let's talk",
        page: "P31",
        dialogues: [
          { speaker: 'Oliver', text: 'I like autumn. I really like the colours.', cn: '我喜欢秋天。我真的很喜欢那些颜色。' },
          { speaker: 'Chen Jie', text: 'I like autumn, too. We usually have a school trip in autumn.', cn: '我也喜欢秋天。我们秋天通常有一次学校旅行。' },
          { speaker: 'Oliver', text: 'Great! When is the trip this year?', cn: '太好了！今年的旅行是什么时候？' },
          { speaker: 'Chen Jie', text: 'It\'s in October. We\'ll go to the Great Wall.', cn: '在十月。我们要去长城。' },
          { speaker: 'Oliver', text: 'Cool! I love the Great Wall!', cn: '太酷了！我爱长城！' },
        ]
      },
      {
        type: "learn",
        title: "B Let's learn",
        page: "P32",
        dialogues: [
          { text: 'July / August / September / October / November / December', cn: '七月 / 八月 / 九月 / 十月 / 十一月 / 十二月' },
          { speaker: 'A', text: 'When is Teachers\' Day?', cn: '教师节是什么时候？' },
          { speaker: 'B', text: 'It\'s in September.', cn: '在九月。' },
          { speaker: 'A', text: 'When is China\'s National Day?', cn: '国庆节是什么时候？' },
          { speaker: 'B', text: 'It\'s in October.', cn: '在十月。' },
        ]
      },
      {
        type: "exercise",
        title: "B Ask and write",
        page: "P32",
        dialogues: [
          { text: 'Ask your partner about the months of holidays and write them down.', cn: '询问同伴关于节日的月份并写下来。' },
        ]
      },
      {
        type: "read",
        title: "B Read and write",
        page: "P33-34",
        dialogues: [
          { text: 'Easter Party', cn: '复活节派对' },
          { text: 'WHEN: April 12th, 7 p.m.', cn: '时间：4月12日，晚上7点' },
          { text: 'WHY: Easter holiday', cn: '原因：复活节假期' },
          { text: 'WHERE: Wu Yifan\'s home', cn: '地点：吴一凡的家' },
          { text: 'WHAT: We will play many games. We will roll Easter eggs. We will look for eggs. We will eat chocolate eggs. You will meet the Easter Bunny!', cn: '活动：我们会玩很多游戏。我们会滚彩蛋。我们会找彩蛋。我们会吃巧克力蛋。你会见到复活节兔子！' },
          { text: 'RSVP: Will you come to the party? Please send an email at robin@helpsu.cn by March 23rd.', cn: '请回复：你会来参加派对吗？请在3月23日前发邮件到robin@helpsu.cn。' },
        ]
      },
      {
        type: "check",
        title: "Let's check",
        page: "P35",
        dialogues: [
          { speaker: 'Miss White', text: 'We have lots of fun things this spring. In March there is the school trip. We\'ll go to the Great Wall. In April, we\'ll have a singing contest. In May, we\'ll visit a farm.', cn: '今年春天我们有很多有趣的事情。三月有学校旅行，我们去长城。四月有歌唱比赛。五月我们去参观农场。' },
          { speaker: 'John', text: 'Look at the calendar. In September, there is Teachers\' Day. In October, we\'ll go to the zoo. In November, there is Thanksgiving Day. We\'ll eat a big dinner. In December, there is Christmas. We\'ll have a party!', cn: '看日历。九月有教师节。十月我们去动物园。十一月有感恩节，我们吃大餐。十二月有圣诞节，我们开派对！' },
        ]
      },
      {
        type: "story",
        title: "C Story time",
        page: "P36-37",
        dialogues: [
          { speaker: 'Zoom', text: 'Look at my summer vacation plan!', cn: '看我的暑假计划！' },
          { speaker: 'Zip', text: 'It\'s April now. The summer vacation is still three months away.', cn: '现在是四月。暑假还有三个月呢。' },
          { speaker: 'Zoom', text: 'Early planning is always good. In July, I\'ll visit my grandparents. They live in Jilin.', cn: '提前计划总是好的。七月我要去看望祖父母。他们住在吉林。' },
          { speaker: 'Zip', text: 'What will you do in August?', cn: '八月你要做什么？' },
          { speaker: 'Zoom', text: 'In August, I\'ll go to Huangshan Mountain. The trees there are very famous. The clouds are beautiful!', cn: '八月我去黄山。那里的树很有名，云也很美！' },
          { speaker: 'Zip', text: 'You have a great plan, but what will you do this weekend?', cn: '你的计划很好，但这周末你做什么？' },
          { speaker: 'Zoom', text: 'This weekend? There will be a maths test next Monday. So please study hard!', cn: '这周末？下周一有数学考试。所以请努力学习！' },
        ]
      }
    ]
  },
  {
    title: "Unit 4 When is the art show?",
    page: "P38-49",
    sections: [
      {
        type: "try",
        title: "A Let's try",
        page: "P40",
        dialogues: [
          { speaker: 'Mr Jones', text: 'When is the sports meet, Zhang Peng?', cn: '张鹏，运动会是什么时候？' },
          { speaker: 'Zhang Peng', text: 'It\'s on April 4th.', cn: '在4月4日。' },
          { speaker: 'Mr Jones', text: 'It\'s next Friday, then. Good luck.', cn: '那就是下周五了。祝你好运。' },
          { speaker: 'Zhang Peng', text: 'Thanks.', cn: '谢谢。' },
        ]
      },
      {
        type: "talk",
        title: "A Let's talk",
        page: "P40",
        dialogues: [
          { speaker: 'Mr Jones', text: 'There are some special days in April.', cn: '四月有一些特别的日子。' },
          { speaker: 'Zhang Peng', text: 'What are they?', cn: '是什么？' },
          { speaker: 'Mr Jones', text: 'April Fool\'s Day and Easter.', cn: '愚人节和复活节。' },
          { speaker: 'Zhang Peng', text: 'When is April Fool\'s Day?', cn: '愚人节是什么时候？' },
          { speaker: 'Mr Jones', text: 'It\'s on April 1st.', cn: '在四月一日。' },
          { speaker: 'Zhang Peng', text: 'And Easter?', cn: '那复活节呢？' },
          { speaker: 'Mr Jones', text: 'It\'s on April 5th this year.', cn: '今年在四月五日。' },
          { speaker: 'Zhang Peng', text: 'Wow! I love April!', cn: '哇！我爱四月！' },
        ]
      },
      {
        type: "learn",
        title: "A Let's learn",
        page: "P41",
        dialogues: [
          { text: 'first (1st) / second (2nd) / third (3rd) / fourth (4th) / fifth (5th)', cn: '第一 / 第二 / 第三 / 第四 / 第五' },
          { speaker: 'A', text: 'When is the English test?', cn: '英语考试是什么时候？' },
          { speaker: 'B', text: 'It\'s on November 2nd.', cn: '在11月2日。' },
        ]
      },
      {
        type: "exercise",
        title: "A Read, look and say",
        page: "P41",
        dialogues: [
          { text: 'Read the sentences, look at the pictures and say the dates.', cn: '读句子，看图并说出日期。' },
        ]
      },
      {
        type: "spell",
        title: "A Let's spell",
        page: "P42",
        dialogues: [
          { text: 'th /θ/: three, thin, thirteen, maths', cn: 'th 发 /θ/ 音' },
          { text: 'th /ð/: this, that, mother, brother', cn: 'th 发 /ð/ 音' },
          { text: 'My mother has a thin brother.', cn: '我妈妈有个瘦瘦的兄弟。' },
          { text: 'Three boys like maths on Thursday.', cn: '三个男孩周四喜欢学数学。' },
        ]
      },
      {
        type: "try",
        title: "B Let's try",
        page: "P43",
        dialogues: [
          { speaker: 'Mike', text: 'I have a new cousin. Look at his photo.', cn: '我有了一个新表弟。看他的照片。' },
          { speaker: 'Chen Jie', text: 'He\'s so cute! When is his birthday?', cn: '他好可爱！他的生日是什么时候？' },
          { speaker: 'Mike', text: 'It\'s on March 2nd.', cn: '在3月2日。' },
          { speaker: 'Chen Jie', text: 'How old is he now?', cn: '他现在多大了？' },
          { speaker: 'Mike', text: 'He\'s 15 days old.', cn: '他15天大。' },
        ]
      },
      {
        type: "talk",
        title: "B Let's talk",
        page: "P43",
        dialogues: [
          { speaker: 'Chen Jie', text: 'When is your birthday?', cn: '你的生日是什么时候？' },
          { speaker: 'Mike', text: 'My birthday is on April 4th.', cn: '我的生日在4月4日。' },
          { speaker: 'Chen Jie', text: 'That\'s my mother\'s birthday, too!', cn: '那也是我妈妈的生日！' },
          { speaker: 'Mike', text: 'Cool! What will you do for your mum?', cn: '太酷了！你会为你妈妈做什么？' },
          { speaker: 'Chen Jie', text: 'I\'ll cook noodles for her.', cn: '我会给她做面条。' },
          { speaker: 'Mike', text: 'Chinese noodles are delicious!', cn: '中国面条很好吃！' },
          { speaker: 'Chen Jie', text: 'Please come then. We can have a birthday party for both of you!', cn: '请到时候来吧。我们可以为你们俩办一个生日派对！' },
        ]
      },
      {
        type: "learn",
        title: "B Let's learn",
        page: "P44",
        dialogues: [
          { text: 'twelfth (12th) / twentieth (20th) / twenty-first (21st) / twenty-third (23rd) / thirtieth (30th)', cn: '第十二 / 第二十 / 第二十一 / 第二十三 / 第三十' },
          { speaker: 'A', text: 'When is Grandpa\'s birthday?', cn: '爷爷的生日是什么时候？' },
          { speaker: 'B', text: 'It\'s on October 12th.', cn: '在10月12日。' },
        ]
      },
      {
        type: "exercise",
        title: "B Fill in the table",
        page: "P44",
        dialogues: [
          { text: 'Fill in the table with your family\'s birthdays.', cn: '填表记录家人的生日。' },
        ]
      },
      {
        type: "read",
        title: "B Read and write",
        page: "P45-46",
        dialogues: [
          { text: 'Two new kittens', cn: '两只新生小猫' },
          { text: 'Sarah\'s cat has two kittens. Read Sarah\'s diary.', cn: 'Sarah的猫生了两只小猫。读Sarah的日记。' },
          { speaker: 'Sarah', text: 'April 15th: My cat has two new kittens. They are pink because they are very young. They still can\'t see.', cn: '4月15日：我的猫生了两只小猫。它们是粉色的，因为还很幼小。它们还看不见。' },
          { speaker: 'Sarah', text: 'April 21st: The kittens are six days old. They make noises when they are hungry. They have white fur now. They are cute.', cn: '4月21日：小猫六天大了。它们饿了会叫。它们现在有白色的毛了。它们很可爱。' },
          { speaker: 'Sarah', text: 'April 26th: Their eyes are open! They are blue.', cn: '4月26日：它们的眼睛睁开了！是蓝色的。' },
          { speaker: 'Sarah', text: 'May 3rd: The kittens can walk now. They can play with Robin!', cn: '5月3日：小猫现在会走了。它们可以和Robin一起玩了！' },
        ]
      },
      {
        type: "check",
        title: "Let's check",
        page: "P47",
        dialogues: [
          { speaker: 'Boy', text: 'What\'s your name, please?', cn: '请问你叫什么名字？' },
          { speaker: 'Girl', text: 'My name is Summer.', cn: '我叫Summer。' },
          { speaker: 'Boy', text: 'Is your birthday in summer?', cn: '你的生日在夏天吗？' },
          { speaker: 'Girl', text: 'Yes. My birthday is on July 7th.', cn: '是的。我的生日在7月7日。' },
          { speaker: 'Boy', text: 'Can you come to my birthday party this Saturday?', cn: '这个周六你能来参加我的生日派对吗？' },
          { speaker: 'Girl', text: 'Let me think. It\'s May 10th. Yes, I\'m free.', cn: '让我想想。那是5月10日。好的，我有空。' },
        ]
      },
      {
        type: "story",
        title: "C Story time",
        page: "P48-49",
        dialogues: [
          { speaker: 'Zoom', text: 'I have a singing test on May 3rd. What should I do?', cn: '我5月3日有歌唱测试。我该怎么办？' },
          { speaker: 'Zip', text: 'Practice makes perfect. Let me help you.', cn: '熟能生巧。让我来帮你。' },
          { speaker: 'Zoom', text: 'La la la...', cn: '啦啦啦...' },
          { speaker: 'Zip', text: 'You sound terrible! You need more practice.', cn: '你唱得太难听了！你需要多练习。' },
          { speaker: 'Zoom', text: 'Thank you, Zip. I\'ll practice every day.', cn: '谢谢你，Zip。我会天天练习的。' },
          { speaker: 'Zip', text: 'The test is today. Good luck!', cn: '今天考试了。祝你好运！' },
          { speaker: 'Zoom', text: 'I\'m ready. Listen to my song!', cn: '我准备好了。听我唱歌！' },
          { speaker: 'Zip', text: 'Wow! You sing so well now!', cn: '哇！你现在唱得真好！' },
        ]
      }
    ]
  },
  {
    title: "Unit 5 Whose dog is it?",
    page: "P50-61",
    sections: [
      {
        type: "try",
        title: "A Let's try",
        page: "P52",
        dialogues: [
          { speaker: 'Chen Jie', text: 'The school art show is great.', cn: '学校艺术展很棒。' },
          { speaker: 'Mike', text: 'Yes. I like this picture. The trees are beautiful.', cn: '是的。我喜欢这幅画。这些树很美。' },
          { speaker: 'Chen Jie', text: 'Whose picture is it?', cn: '这是谁的画？' },
          { speaker: 'Mike', text: 'It\'s John\'s.', cn: '是John的。' },
          { speaker: 'Chen Jie', text: 'What about the one over there? I like the blue colour.', cn: '那边那幅呢？我喜欢蓝色。' },
          { speaker: 'Mike', text: 'That\'s mine.', cn: '那是我的。' },
        ]
      },
      {
        type: "talk",
        title: "A Let's talk",
        page: "P52",
        dialogues: [
          { speaker: 'Chen Jie', text: 'The yellow picture is mine. Are these all ours?', cn: '那幅黄色的画是我的。这些全都是我们的吗？' },
          { speaker: 'Mike', text: 'Yes, they are.', cn: '是的。' },
          { speaker: 'Chen Jie', text: 'Wow! That picture of Beijing is beautiful. Whose is it?', cn: '哇！那幅北京画很漂亮。它是谁的？' },
          { speaker: 'Mike', text: 'It\'s Zhang Peng\'s.', cn: '是张鹏的。' },
          { speaker: 'Chen Jie', text: 'Look! There is a picture of Shanghai, too.', cn: '看！还有一幅上海画。' },
          { speaker: 'Mike', text: 'It\'s Yifan\'s.', cn: '是一凡的。' },
          { speaker: 'Chen Jie', text: 'Oh, yes! It\'s his.', cn: '哦，对！是他的。' },
        ]
      },
      {
        type: "learn",
        title: "A Let's learn",
        page: "P53",
        dialogues: [
          { text: 'mine / yours / his / hers / theirs / ours', cn: '我的 / 你的 / 他的 / 她的 / 他们的 / 我们的' },
          { speaker: 'A', text: 'Whose book is this?', cn: '这是谁的书？' },
          { speaker: 'B', text: 'It\'s mine.', cn: '是我的。' },
          { speaker: 'A', text: 'Whose pens are these?', cn: '这些是谁的笔？' },
          { speaker: 'B', text: 'They\'re yours.', cn: '是你的。' },
        ]
      },
      {
        type: "exercise",
        title: "A Look, say and complete",
        page: "P53",
        dialogues: [
          { text: 'Look at the pictures, say and complete the sentences with mine, yours, his, hers, ours, theirs.', cn: '看图，用物主代词说句子并完成。' },
        ]
      },
      {
        type: "spell",
        title: "A Let's spell",
        page: "P54",
        dialogues: [
          { text: 'ng /ŋ/: long, sing, ring, young', cn: 'ng 发 /ŋ/ 音' },
          { text: 'nk /ŋk/: think, ink, trunk, pink', cn: 'nk 发 /ŋk/ 音' },
          { text: 'I think the young girl can sing a long song.', cn: '我想那个年轻女孩能唱一首很长的歌。' },
          { text: 'There is a pink trunk with ink.', cn: '有一个粉色箱子里面有墨水。' },
        ]
      },
      {
        type: "try",
        title: "B Let's try",
        page: "P55",
        dialogues: [
          { speaker: 'Sam', text: 'Chen Jie, where is Fido?', cn: '陈洁，Fido在哪里？' },
          { speaker: 'Chen Jie', text: 'He\'s in the living room.', cn: '他在客厅。' },
          { speaker: 'Sam', text: 'What is he doing?', cn: '他在做什么？' },
          { speaker: 'Chen Jie', text: 'He\'s sleeping.', cn: '他在睡觉。' },
          { speaker: 'Sam', text: 'Again?! Oh, I want to play with him.', cn: '又睡了？！哦，我想和他玩。' },
          { speaker: 'Chen Jie', text: 'You can play with him later!', cn: '你可以晚点和他玩！' },
        ]
      },
      {
        type: "talk",
        title: "B Let's talk",
        page: "P55",
        dialogues: [
          { text: 'Sam is at Chen Jie\'s home.', cn: 'Sam在陈洁家。' },
          { speaker: 'Sam', text: 'Where is Fido now?', cn: 'Fido现在在哪里？' },
          { speaker: 'Chen Jie', text: 'He\'s in the kitchen.', cn: '他在厨房。' },
          { speaker: 'Sam', text: 'Is he drinking water?', cn: '他在喝水吗？' },
          { speaker: 'Chen Jie', text: 'No, he isn\'t. He\'s eating.', cn: '不，他没有。他在吃东西。' },
          { speaker: 'Sam', text: 'Can I play with him now?', cn: '我现在可以和他玩吗？' },
          { speaker: 'Chen Jie', text: 'Yes. Can you take him to the park?', cn: '可以。你能带他去公园吗？' },
          { speaker: 'Sam', text: 'Of course! Fido, come here!', cn: '当然！Fido，过来！' },
          { speaker: 'Fido', text: 'Woof, woof!', cn: '汪汪！' },
        ]
      },
      {
        type: "learn",
        title: "B Let's learn",
        page: "P56",
        dialogues: [
          { text: 'climbing / eating / drinking / playing / jumping / sleeping', cn: '爬 / 吃 / 喝 / 玩 / 跳 / 睡觉' },
          { speaker: 'A', text: 'Look! What is the rabbit doing?', cn: '看！兔子在做什么？' },
          { speaker: 'B', text: 'It\'s jumping.', cn: '它在跳。' },
          { speaker: 'A', text: 'What are the birds doing?', cn: '小鸟们在做什么？' },
          { speaker: 'B', text: 'They are flying.', cn: '它们在飞。' },
        ]
      },
      {
        type: "exercise",
        title: "B Play a game",
        page: "P56",
        dialogues: [
          { text: 'Play a game. One student acts, others guess: \'Is he/she...? Yes, he/she is. No, he/she isn\'t.\'', cn: '做游戏。一人表演，其他人猜: \'他/她是在...吗？\'' },
        ]
      },
      {
        type: "read",
        title: "B Read and write",
        page: "P57-58",
        dialogues: [
          { text: 'Robin at the zoo', cn: 'Robin在动物园' },
          { text: 'Sarah and Robin are at the zoo. Robin is excited!', cn: 'Sarah和Robin在动物园。Robin很兴奋！' },
          { speaker: 'Sarah', text: 'What are you doing here, Robin?', cn: 'Robin，你在这里做什么？' },
          { speaker: 'Robin', text: 'I\'m looking at a bear. I\'m dancing like a bear.', cn: '我在看熊。我像熊一样跳舞。' },
          { speaker: 'Robin', text: 'I\'m looking at the rabbits. I\'m eating like a rabbit.', cn: '我在看兔子。我像兔子一样吃东西。' },
          { speaker: 'Robin', text: 'I\'m looking at a tiger. I\'m running like a tiger.', cn: '我在看老虎。我像老虎一样跑。' },
          { speaker: 'Robin', text: 'I\'m looking at an elephant. I\'m walking like an elephant.', cn: '我在看大象。我像大象一样走路。' },
          { speaker: 'Robin', text: 'I\'m looking at a monkey. I\'m climbing like him.', cn: '我在看猴子。我像它一样爬。' },
          { speaker: 'Robin', text: 'I\'m looking at a bird. I like flying. I want to be a bird!', cn: '我在看鸟。我喜欢飞翔。我想变成一只鸟！' },
          { speaker: 'Sarah', text: 'Robin, do you want to swim like a fish?', cn: 'Robin，你想像鱼一样游泳吗？' },
          { speaker: 'Robin', text: 'No! No! I don\'t want to be a fish!', cn: '不！不！我不想变成鱼！' },
        ]
      },
      {
        type: "check",
        title: "Let's check",
        page: "P59",
        dialogues: [
          { speaker: 'Mrs Smith', text: 'Hi, Mrs Green!', cn: '你好，格林太太！' },
          { speaker: 'Mrs Green', text: 'Hi, Mrs Smith!', cn: '你好，史密斯太太！' },
          { speaker: 'Mrs Smith', text: 'Where is Amy now?', cn: 'Amy现在在哪里？' },
          { speaker: 'Mrs Green', text: 'She is shopping for us.', cn: '她在为我们购物。' },
          { speaker: 'Mrs Smith', text: 'I see. What a good girl!', cn: '我明白了。真是个好孩子！' },
          { speaker: 'Chen Jie', text: 'Look at the cat.', cn: '看那只猫。' },
          { speaker: 'Mike', text: 'Oh, yes. Haha! It\'s climbing!', cn: '哦，是的。哈哈！它在爬！' },
          { speaker: 'Boy', text: 'Hey, whose bike is that?', cn: '嘿，那是谁的自行车？' },
          { speaker: 'Girl', text: 'It\'s mine. Do you like it?', cn: '是我的。你喜欢吗？' },
        ]
      },
      {
        type: "story",
        title: "C Story time",
        page: "P60-61",
        dialogues: [
          { speaker: 'Zoom', text: 'Let\'s go to the zoo!', cn: '我们去动物园吧！' },
          { speaker: 'Zip', text: 'Great! Look! Whose tail is that?', cn: '太好了！看！那是谁的尾巴？' },
          { speaker: 'Zoom', text: 'It\'s a tiger\'s. The tiger is running fast.', cn: '是老虎的。老虎跑得很快。' },
          { speaker: 'Zip', text: 'Look at the monkeys. They\'re climbing the tree.', cn: '看那些猴子。它们在爬树。' },
          { speaker: 'Zoom', text: 'They are looking at us. They are copying us!', cn: '它们在看着我们。它们在模仿我们！' },
          { speaker: 'Zip', text: 'Let\'s take a picture of them. Cheese!', cn: '我们给它们拍张照吧。茄子！' },
          { speaker: 'Zoom', text: 'Look! The monkeys are taking pictures, too!', cn: '看！猴子也在拍照！' },
          { speaker: 'Zip', text: 'Oh, no! That\'s my camera!', cn: '哦，不！那是我的相机！' },
        ]
      }
    ]
  },
  {
    title: "Unit 6 Work quietly!",
    page: "P62-73",
    sections: [
      {
        type: "try",
        title: "A Let's try",
        page: "P64",
        dialogues: [
          { speaker: 'Mike', text: 'Wow! There are so many animals in the zoo.', cn: '哇！动物园里有好多动物。' },
          { speaker: 'Chen Jie', text: 'Yes. I love them. Look! The birds are flying.', cn: '是的。我爱它们。看！小鸟在飞。' },
          { speaker: 'Mike', text: 'And there is a yellow tiger, too.', cn: '还有一只黄色的老虎。' },
          { speaker: 'Chen Jie', text: 'Yes. It is running very fast!', cn: '是的。它跑得很快！' },
        ]
      },
      {
        type: "talk",
        title: "A Let's talk",
        page: "P64",
        dialogues: [
          { speaker: 'Chen Jie', text: 'Look at the pandas.', cn: '看那些熊猫。' },
          { speaker: 'Mike', text: 'What are they doing?', cn: '它们正在做什么？' },
          { speaker: 'Chen Jie', text: 'Haha. They\'re eating lunch! They\'re so cute.', cn: '哈哈。它们在吃午饭！它们好可爱。' },
          { speaker: 'Mike', text: 'Oh, yes! They like bamboo.', cn: '哦，是的！它们喜欢竹子。' },
          { speaker: 'Chen Jie', text: 'What\'s the little monkey doing?', cn: '那只小猴子在做什么？' },
          { speaker: 'Mike', text: 'It\'s playing with its mother!', cn: '它在和妈妈玩！' },
          { speaker: 'Chen Jie', text: 'Do you see any elephants?', cn: '你看到大象了吗？' },
          { speaker: 'Mike', text: 'Yes! Look there! The elephant is drinking water.', cn: '看到了！看那边！大象在喝水。' },
        ]
      },
      {
        type: "learn",
        title: "A Let's learn",
        page: "P65",
        dialogues: [
          { text: 'doing morning exercises / having English class / eating lunch / reading a book / listening to music', cn: '做早操 / 上英语课 / 吃午饭 / 看书 / 听音乐' },
          { speaker: 'A', text: 'What is Chen Jie doing?', cn: '陈洁在做什么？' },
          { speaker: 'B', text: 'She\'s listening to music.', cn: '她在听音乐。' },
        ]
      },
      {
        type: "exercise",
        title: "A Look and say",
        page: "P65",
        dialogues: [
          { text: 'Look at the pictures and say what they are doing.', cn: '看图并说出他们正在做什么。' },
        ]
      },
      {
        type: "spell",
        title: "A Let's spell",
        page: "P66",
        dialogues: [
          { text: 'wh /w/: what, when, where, white', cn: 'wh 发 /w/ 音' },
          { text: 'wh /h/: who, whose, whole', cn: 'wh 发 /h/ 音' },
          { text: 'What colour is the white whale?', cn: '那只白鲸是什么颜色？' },
          { text: 'Who knows whose whole cake this is?', cn: '谁知道这整个蛋糕是谁的？' },
        ]
      },
      {
        type: "try",
        title: "B Let's try",
        page: "P67",
        dialogues: [
          { speaker: 'Tom', text: 'Hi, I am new here. Is this the library?', cn: '你好，我是新来的。这是图书馆吗？' },
          { speaker: 'John', text: 'Yes, it is. Can I help you?', cn: '是的。需要帮忙吗？' },
          { speaker: 'Tom', text: 'Yes. Where are the English books?', cn: '是的。英语书在哪里？' },
          { speaker: 'John', text: 'Oh. Over here!', cn: '哦。在这边！' },
          { speaker: 'Teacher', text: 'Shh! Talk quietly!', cn: '嘘！小声说话！' },
        ]
      },
      {
        type: "talk",
        title: "B Let's talk",
        page: "P67",
        dialogues: [
          { speaker: 'Tom', text: 'My name is Tom. What\'s your name?', cn: '我叫Tom。你叫什么名字？' },
          { speaker: 'John', text: 'Shh. Talk quietly. I\'m John. I can show you the English books.', cn: '嘘。小声说话。我是John。我可以带你看英语书。' },
          { speaker: 'Tom', text: 'Thanks.', cn: '谢谢。' },
          { speaker: 'John', text: 'Here they are.', cn: '书在这里。' },
          { speaker: 'Tom', text: 'OK. Can I read the books here?', cn: '好的。我可以在这里看书吗？' },
          { speaker: 'John', text: 'Yes. Of course.', cn: '当然可以。' },
          { speaker: 'Tom', text: 'Anything else?', cn: '还有什么要注意的吗？' },
          { speaker: 'John', text: 'Yes. Keep your desk clean.', cn: '有。保持桌面整洁。' },
          { speaker: 'Tom', text: 'OK, I will. Thanks.', cn: '好的，我会的。谢谢。' },
        ]
      },
      {
        type: "learn",
        title: "B Let's learn",
        page: "P68",
        dialogues: [
          { text: 'turn / take turns / keep to the right / keep your desk clean / talk quietly / work quietly', cn: '轮流 / 靠右行 / 保持桌面整洁 / 小声说话 / 安静做事' },
          { speaker: 'A', text: 'Look! They are taking turns.', cn: '看！他们在轮流。' },
          { speaker: 'B', text: 'Yes. We should take turns, too.', cn: '是的。我们也应该轮流。' },
        ]
      },
      {
        type: "exercise",
        title: "B Match, say and act",
        page: "P68",
        dialogues: [
          { text: 'Match the rules with the pictures, say and act them out.', cn: '将规则与图片配对，说出来并表演。' },
        ]
      },
      {
        type: "read",
        title: "B Read and write",
        page: "P69-70",
        dialogues: [
          { text: 'The world robot exhibition', cn: '世界机器人展览' },
          { speaker: 'Sarah', text: 'Ni hao. Ni zai gan shen me ne?', cn: '你好。你在干什么呢？' },
          { speaker: 'Robot 1', text: 'Sorry. What are you saying?', cn: '对不起。你在说什么？' },
          { speaker: 'Sarah', text: 'I\'m speaking Chinese.', cn: '我在说中文。' },
          { speaker: 'Robot 1', text: 'Oh, hello. What are you doing?', cn: '哦，你好。你在做什么？' },
          { speaker: 'Sarah', text: 'I\'m drawing a picture. Have a look.', cn: '我在画画。看一看。' },
          { speaker: 'Robot 1', text: 'It\'s lovely.', cn: '很可爱。' },
          { speaker: 'Sarah', text: 'Are you cooking?', cn: '你在做饭吗？' },
          { speaker: 'Robot 2', text: 'Yes. I\'m cooking rice. Asako is making sushi.', cn: '是的。我在做米饭。Asako在做寿司。' },
          { speaker: 'Sarah', text: 'Can we play music with you?', cn: '我们可以和你们一起演奏音乐吗？' },
          { speaker: 'Robot 2', text: 'Sure. Please take turns.', cn: '当然。请轮流。' },
          { speaker: 'Sarah', text: 'Are you from China?', cn: '你来自中国吗？' },
          { speaker: 'Robot 3', text: 'Yes, I am.', cn: '是的。' },
          { speaker: 'Sarah', text: 'You\'re so cool! Can you teach me?', cn: '你太酷了！你能教我吗？' },
          { speaker: 'Robot 3', text: 'Sure!', cn: '当然！' },
          { speaker: 'Sarah', text: 'Are you doing kung fu?', cn: '你在练功夫吗？' },
          { speaker: 'Robot 4', text: 'Yes, I am. I\'ll show you.', cn: '是的。我表演给你看。' },
        ]
      },
      {
        type: "check",
        title: "Let's check",
        page: "P71",
        dialogues: [
          { speaker: 'Robin', text: 'Where is Grandpa, Yifan?', cn: '一凡，爷爷在哪里？' },
          { speaker: 'Wu Yifan', text: 'He\'s in his room. He\'s reading a book.', cn: '他在自己房间。他在看书。' },
          { speaker: 'John', text: 'Mike, can I use your pen, please?', cn: 'Mike，我能用一下你的笔吗？' },
          { speaker: 'Mike', text: 'OK, John. Here you are!', cn: '好的，John。给你！' },
          { speaker: 'Miss White', text: 'Talk quietly!', cn: '小声说话！' },
          { speaker: 'Chen Jie', text: 'I\'m listening to English music. It\'s cool.', cn: '我在听英语音乐。很酷。' },
          { speaker: 'Zhang Peng', text: 'I like English music.', cn: '我喜欢英语音乐。' },
          { speaker: 'Mike', text: 'I like it, too.', cn: '我也喜欢。' },
          { speaker: 'Chen Jie', text: 'Here, listen! Take turns.', cn: '给，听吧！轮流来。' },
        ]
      },
      {
        type: "story",
        title: "C Story time",
        page: "P72-73",
        dialogues: [
          { speaker: 'Zoom', text: 'Let\'s go to the cinema. There is a new film about a gorilla.', cn: '我们去看电影吧。有一部关于大猩猩的新片。' },
          { speaker: 'Zip', text: 'Great! I love gorillas.', cn: '太好了！我喜欢大猩猩。' },
          { speaker: 'Zoom', text: 'Look! The gorilla is big and strong. It\'s eating a banana.', cn: '看！大猩猩又大又壮。它在吃香蕉。' },
          { speaker: 'Zip', text: 'What\'s that noise?', cn: '那是什么声音？' },
          { speaker: 'Zoom', text: 'I\'m eating popcorn. It\'s so delicious!', cn: '我在吃爆米花。太好吃啦！' },
          { speaker: 'Zip', text: 'Shh! Talk quietly! We are in the cinema.', cn: '嘘！小声说话！我们在电影院里。' },
          { speaker: 'Zoom', text: 'Sorry. Look! The gorilla is climbing a tall building!', cn: '对不起。看！大猩猩在爬一座高楼！' },
          { speaker: 'Zip', text: 'It\'s so exciting!', cn: '太刺激了！' },
          { speaker: 'Zoom', text: 'Yes, it is! Oh, no! Where is my popcorn?', cn: '是啊！哦，不！我的爆米花呢？' },
          { speaker: 'Zip', text: 'Look! Keep your seat clean!', cn: '看！保持座位干净！' },
        ]
      }
    ]
  },
]},


  // ========== 六年级上册 ==========
  { title: '六年级上册', units: [
  {
    title: 'Unit 1 How can I get there?',
    page: 'P2-11',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Wu Binbin', text: 'Robin, where is the museum shop? I want to buy a postcard.', cn: 'Robin，博物馆商店在哪里？我想买一张明信片。' },
          { speaker: 'Robin', text: 'It\'s near the door.', cn: '在门附近。' },
          { speaker: 'Wu Binbin', text: 'Thanks. Where is the post office? I want to send the letter.', cn: '谢谢。邮局在哪里？我想寄这封信。' },
          { speaker: 'Robin', text: 'I don\'t know. I\'ll ask. Excuse me, sir.', cn: '我不知道。我去问一下。打扰一下，先生。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'Where is the cinema?', cn: '电影院在哪里？' },
          { speaker: '', text: 'It\'s next to the bookstore.', cn: '在书店旁边。' },
          { speaker: '', text: 'Where is the hospital?', cn: '医院在哪里？' },
          { speaker: '', text: 'It\'s near the park.', cn: '在公园附近。' },
          { speaker: '', text: 'How can I get to the restaurant?', cn: '我怎么去餐馆？' },
          { speaker: '', text: 'Turn right at the crossing.', cn: '在十字路口右转。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 2 Ways to go to school',
    page: 'P12-21',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Mike', text: 'Good morning, Mrs Smith!', cn: '早上好，Smith老师！' },
          { speaker: 'Mrs Smith', text: 'Hi, children. You\'re early. How do you come to school?', cn: '嗨，孩子们。你们很早啊。你们怎么来学校的？' },
          { speaker: 'Amy', text: 'I usually come on foot. Sometimes I come by bus.', cn: '我通常步行来。有时候坐公交来。' },
          { speaker: 'Mike', text: 'I often come by bike.', cn: '我经常骑自行车来。' },
          { speaker: 'Mrs Smith', text: 'How do you come to school, Mike?', cn: '你怎么来学校的，Mike？' },
          { speaker: 'Mike', text: 'I often come by bike.', cn: '我经常骑自行车来。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'How do you go to school?', cn: '你怎么去上学？' },
          { speaker: '', text: 'I go to school by bus.', cn: '我坐公交去上学。' },
          { speaker: '', text: 'I go to school on foot.', cn: '我步行去上学。' },
          { speaker: '', text: 'Stop and wait at a red light.', cn: '红灯停，等一等。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 3 My weekend plan',
    page: 'P22-31',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Mike', text: 'What are you going to do tomorrow?', cn: '你明天打算做什么？' },
          { speaker: 'Sarah', text: 'I\'m going to have an art lesson.', cn: '我要上美术课。' },
          { speaker: 'Mike', text: 'What are you going to do in your lesson?', cn: '你在课上打算做什么？' },
          { speaker: 'Sarah', text: 'We\'re going to draw some pictures.', cn: '我们要画一些画。' },
          { speaker: 'Mike', text: 'Sounds great! I\'m going to see a film.', cn: '听起来不错！我要去看电影。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'What are you going to do this evening?', cn: '你今晚打算做什么？' },
          { speaker: '', text: 'I\'m going to visit my grandparents.', cn: '我要去看望我的爷爷奶奶。' },
          { speaker: '', text: 'I\'m going to take a trip.', cn: '我要去旅行。' },
          { speaker: '', text: 'We\'re going to see a film about space travel.', cn: '我们要去看一部关于太空旅行的电影。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 4 I have a pen pal',
    page: 'P32-41',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Oliver', text: 'What are Peter\'s hobbies?', cn: 'Peter的爱好是什么？' },
          { speaker: 'Zhang Peng', text: 'He likes reading stories. He lives on a farm.', cn: '他喜欢读故事。他住在农场。' },
          { speaker: 'Oliver', text: 'Does he like doing kung fu?', cn: '他喜欢练功夫吗？' },
          { speaker: 'Zhang Peng', text: 'Yes, he does. He also likes swimming.', cn: '是的，他喜欢。他也喜欢游泳。' },
          { speaker: 'Oliver', text: 'Cool! Can I be his pen pal too?', cn: '酷！我也可以做他的笔友吗？' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'What are your hobbies?', cn: '你的爱好是什么？' },
          { speaker: '', text: 'I like singing and dancing.', cn: '我喜欢唱歌和跳舞。' },
          { speaker: '', text: 'Does he like going hiking?', cn: '他喜欢远足吗？' },
          { speaker: '', text: 'Yes, he does. He also likes playing football.', cn: '是的，他喜欢。他也喜欢踢足球。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 5 What does he do?',
    page: 'P42-51',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Oliver', text: 'Is your father here today?', cn: '你爸爸今天在这里吗？' },
          { speaker: 'Sarah', text: 'No, he isn\'t. He\'s in Australia.', cn: '不，他不在。他在澳大利亚。' },
          { speaker: 'Oliver', text: 'What does he do?', cn: '他是做什么的？' },
          { speaker: 'Sarah', text: 'He\'s a businessman. He often goes to other countries.', cn: '他是个商人。他经常去其他国家。' },
          { speaker: 'Oliver', text: 'What does your mother do?', cn: '你妈妈是做什么的？' },
          { speaker: 'Sarah', text: 'She\'s a head teacher.', cn: '她是一名校长。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'What does your father do?', cn: '你爸爸是做什么的？' },
          { speaker: '', text: 'He is a pilot.', cn: '他是一名飞行员。' },
          { speaker: '', text: 'Where does he work?', cn: '他在哪里工作？' },
          { speaker: '', text: 'He works in a gym.', cn: '他在一家健身房工作。' },
          { speaker: '', text: 'She is a scientist.', cn: '她是一名科学家。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 6 How do you feel?',
    page: 'P52-61',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Sam', text: 'What\'s this cartoon about?', cn: '这部卡通片是关于什么的？' },
          { speaker: 'Sarah', text: 'It\'s about a cat. The cat is a police officer.', cn: '是关于一只猫的。这只猫是一名警官。' },
          { speaker: 'Sam', text: 'Cool!', cn: '酷！' },
          { speaker: 'Sarah', text: 'The mice are afraid of him.', cn: '老鼠们都怕他。' },
          { speaker: 'Sam', text: 'Why?', cn: '为什么？' },
          { speaker: 'Sarah', text: 'Because the cat chases the mice!', cn: '因为猫会追老鼠！' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'How do you feel?', cn: '你感觉怎么样？' },
          { speaker: '', text: 'I am happy.', cn: '我很开心。' },
          { speaker: '', text: 'She is sad.', cn: '她很难过。' },
          { speaker: '', text: 'He is angry.', cn: '他很生气。' },
          { speaker: '', text: 'Don\'t be worried. You should take a deep breath.', cn: '别担心。你应该深呼吸。' }
        ]
      }
    ]
  }]},

  // ========== 六年级下册 ==========
  { title: '六年级下册', units: [
  {
    title: 'Unit 1 How tall are you?',
    page: 'P2-11',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Zhang Peng', text: 'Look! That\'s the tallest dinosaur in this hall.', cn: '看！那是这个大厅里最高的恐龙。' },
          { speaker: 'Mike', text: 'Yes, it is. How tall is it?', cn: '是的。它有多高？' },
          { speaker: 'Zhang Peng', text: 'Maybe four metres.', cn: '可能四米。' },
          { speaker: 'Mike', text: 'Wow! That\'s taller than both of us together.', cn: '哇！它比我们俩加起来都高。' },
          { speaker: 'Zhang Peng', text: 'How tall are you?', cn: '你有多高？' },
          { speaker: 'Mike', text: 'I\'m 1.65 metres.', cn: '我一米六五。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'How tall are you?', cn: '你有多高？' },
          { speaker: '', text: 'I\'m 1.61 metres.', cn: '我一米六一。' },
          { speaker: '', text: 'You are taller than me.', cn: '你比我高。' },
          { speaker: '', text: 'How heavy are you?', cn: '你有多重？' },
          { speaker: '', text: 'I\'m 48 kilograms.', cn: '我四十八公斤。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 2 Last weekend',
    page: 'P12-21',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Mike', text: 'Hi, Grandpa. How are you? How was your weekend?', cn: '你好，爷爷。你好吗？你周末过得怎么样？' },
          { speaker: 'Grandpa', text: 'I\'m fine, Mike. It was good, thank you.', cn: '我很好，Mike。很不错，谢谢你。' },
          { speaker: 'Mike', text: 'What did you do?', cn: '你做了什么？' },
          { speaker: 'Grandpa', text: 'I stayed at home with your grandma. We drank tea in the afternoon and watched TV.', cn: '我和你奶奶待在家里。下午我们喝茶，看电视。' },
          { speaker: 'Mike', text: 'I watched TV, too. I watched some children\'s shows on TV.', cn: '我也看电视了。我看了一些儿童节目。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'What did you do last weekend?', cn: '你上周末做了什么？' },
          { speaker: '', text: 'I cleaned my room.', cn: '我打扫了我的房间。' },
          { speaker: '', text: 'I stayed at home.', cn: '我待在家里。' },
          { speaker: '', text: 'Did you watch TV?', cn: '你看电视了吗？' },
          { speaker: '', text: 'Yes, I did. / No, I didn\'t.', cn: '是的。/ 不，没有。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 3 Where did you go?',
    page: 'P22-31',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Amy', text: 'What happened?', cn: '发生什么了？' },
          { speaker: 'John', text: 'I fell off my bike last Saturday and hurt my foot.', cn: '我上周六从自行车上摔下来，伤了脚。' },
          { speaker: 'Amy', text: 'Oh no! Are you all right?', cn: '哦不！你还好吗？' },
          { speaker: 'John', text: 'I\'m OK. Come and look at my photos from the Labour Day holiday.', cn: '我还好。来看看我劳动节假期的照片。' },
          { speaker: 'Amy', text: 'Where did you go?', cn: '你去了哪里？' },
          { speaker: 'John', text: 'I went to Xinjiang.', cn: '我去了新疆。' },
          { speaker: 'Amy', text: 'Did you go to Turpan?', cn: '你去了吐鲁番吗？' },
          { speaker: 'John', text: 'Yes, I did. I saw lots of grapes and ate lots of mutton.', cn: '是的。我看到了很多葡萄，吃了很多羊肉。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'Where did you go last summer holiday?', cn: '你去年暑假去了哪里？' },
          { speaker: '', text: 'I went to Sanya.', cn: '我去了三亚。' },
          { speaker: '', text: 'How did you go there?', cn: '你怎么去的？' },
          { speaker: '', text: 'I went there by plane.', cn: '我坐飞机去的。' }
        ]
      }
    ]
  },
  {
    title: 'Unit 4 Then and now',
    page: 'P32-41',
    sections: [
      {
        type: 'talk',
        title: "Let's talk",
        dialogues: [
          { speaker: 'Grandpa', text: 'Wow, your school is so beautiful!', cn: '哇，你们的学校真漂亮！' },
          { speaker: 'Wu Binbin', text: 'Thank you. There was no library in my old school.', cn: '谢谢。我以前的学校没有图书馆。' },
          { speaker: 'Grandpa', text: 'Tell us about your school, please.', cn: '请给我们讲讲你的学校。' },
          { speaker: 'Wu Binbin', text: 'There was only one small building on a hill.', cn: '山上只有一栋小楼。' },
          { speaker: 'Grandpa', text: 'Could you see the stars at night?', cn: '晚上能看到星星吗？' },
          { speaker: 'Wu Binbin', text: 'Yes, I liked the stars.', cn: '是的，我喜欢星星。' }
        ]
      },
      {
        type: 'learn',
        title: "Let's learn",
        dialogues: [
          { speaker: '', text: 'There was no gym in my school ten years ago.', cn: '十年前我的学校没有体育馆。' },
          { speaker: '', text: 'Now there is a new one.', cn: '现在有一个新的了。' },
          { speaker: '', text: 'I didn\'t wear glasses before.', cn: '我以前不戴眼镜。' },
          { speaker: '', text: 'Now I wear glasses.', cn: '现在我戴眼镜了。' }
        ]
      }
    ]
  }
]}];

// ==================== 各版本课文数据已通过独立script标签加载 ====================
// pepTexts, waiyan3qTexts, waiyan1qTexts, joininTexts, yilinTexts, shanghaiTexts, bnupTexts, jingtongTexts

const textbookTexts = [
  { version: '人教版PEP', grades: pepTexts },
  { version: '外研版（三起点）', grades: waiyan3qTexts },
  { version: '外研版（一起点）', grades: waiyan1qTexts },
  { version: '外研版（Join In版）', grades: joininTexts },
  { version: '译林版（牛津）', grades: yilinTexts },
  { version: '沪教版（牛津上海版）', grades: shanghaiTexts },
  { version: '北师大版（三起点）', grades: bnupTexts },
  { version: '人教精通版', grades: jingtongTexts }
];

// textbookTexts is available as a global
