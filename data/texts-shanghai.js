// data/texts-shanghai.js — 沪教版（牛津上海版）1-6年级课文对话
const shanghaiTexts = [
  // ========== 一年级上册 ==========
  { title: '一年级上册', units: [
  { title: 'Unit 1 Hello', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Hello! I\'m Eddie.', cn: '你好！我是Eddie。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Hello! I\'m Eddie.', cn: '你好！我是Eddie。' },
      { speaker: 'Kitty', text: 'Hi! I\'m Kitty.', cn: '嗨！我是Kitty。' },
      { speaker: 'Alice', text: 'Hello, I\'m Alice.', cn: '你好，我是Alice。' },
      { speaker: 'Danny', text: 'Hi!', cn: '嗨！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Hi!', cn: '嗨！' },
    ]},
  ]},
  { title: 'Unit 2 Good morning', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Good morning!', cn: '早上好！' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Good morning!', cn: '早上好！' },
      { speaker: 'Kitty', text: 'Good morning!', cn: '早上好！' },
      { speaker: 'Miss Fang', text: 'Good afternoon!', cn: '下午好！' },
      { speaker: 'Class', text: 'Good afternoon, Miss Fang!', cn: '下午好，方老师！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Class', text: 'Good afternoon, Miss Fang!', cn: '下午好，方老师！' },
    ]},
  ]},
  { title: 'Unit 3 My face', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Touch your face.', cn: '摸你的脸。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Touch your face.', cn: '摸你的脸。' },
      { speaker: 'Kitty', text: 'This is my mouth.', cn: '这是我的嘴。' },
      { speaker: 'Alice', text: 'This is my nose.', cn: '这是我的鼻子。' },
      { speaker: 'Danny', text: 'This is my eye.', cn: '这是我的眼睛。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'This is my eye.', cn: '这是我的眼睛。' },
    ]},
  ]},
  { title: 'Unit 4 I can sing', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I can sing.', cn: '我会唱歌。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I can sing.', cn: '我会唱歌。' },
      { speaker: 'Kitty', text: 'I can dance.', cn: '我会跳舞。' },
      { speaker: 'Alice', text: 'I can draw.', cn: '我会画画。' },
      { speaker: 'Danny', text: 'I can read.', cn: '我会读书。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I can read.', cn: '我会读书。' },
    ]},
  ]},
  { title: 'Unit 5 My family', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'This is my mother.', cn: '这是我妈妈。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'This is my mother.', cn: '这是我妈妈。' },
      { speaker: 'Kitty', text: 'This is my father.', cn: '这是我爸爸。' },
      { speaker: 'Alice', text: 'This is my grandmother.', cn: '这是我奶奶。' },
      { speaker: 'Danny', text: 'This is my grandfather.', cn: '这是我爷爷。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'This is my grandfather.', cn: '这是我爷爷。' },
    ]},
  ]},
  { title: 'Unit 6 My friends', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'He\'s my friend. He\'s tall.', cn: '他是我的朋友。他很高。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'He\'s my friend. He\'s tall.', cn: '他是我的朋友。他很高。' },
      { speaker: 'Kitty', text: 'She\'s my friend. She\'s short.', cn: '她是我的朋友。她很矮。' },
      { speaker: 'Alice', text: 'We are good friends.', cn: '我们是好朋友。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: '', text: 'Play and enjoy!', cn: '玩一玩！' },
    ]},
  ]},
  { title: 'Unit 7 Seasons', page: 'P62-71', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Spring is warm.', cn: '春天暖和。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Spring is warm.', cn: '春天暖和。' },
      { speaker: 'Kitty', text: 'Summer is hot.', cn: '夏天热。' },
      { speaker: 'Alice', text: 'Autumn is cool.', cn: '秋天凉爽。' },
      { speaker: 'Danny', text: 'Winter is cold.', cn: '冬天冷。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Winter is cold.', cn: '冬天冷。' },
    ]},
  ]},
  ]},
  // ========== 一年级下册 ==========
  { title: '一年级下册', units: [
  { title: 'Unit 1 Look and see', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'What can you see?', cn: '你能看到什么？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'What can you see?', cn: '你能看到什么？' },
      { speaker: 'Kitty', text: 'I can see a bird.', cn: '我能看到一只鸟。' },
      { speaker: 'Alice', text: 'I can see a frog.', cn: '我能看到一只青蛙。' },
      { speaker: 'Danny', text: 'I can see a bee.', cn: '我能看到一只蜜蜂。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I can see a bee.', cn: '我能看到一只蜜蜂。' },
    ]},
  ]},
  { title: 'Unit 2 Food I like', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I like noodles.', cn: '我喜欢面条。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I like noodles.', cn: '我喜欢面条。' },
      { speaker: 'Kitty', text: 'I like rice.', cn: '我喜欢米饭。' },
      { speaker: 'Alice', text: 'Do you like eggs?', cn: '你喜欢鸡蛋吗？' },
      { speaker: 'Danny', text: 'Yes, I like eggs.', cn: '是的，我喜欢鸡蛋。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Yes, I like eggs.', cn: '是的，我喜欢鸡蛋。' },
    ]},
  ]},
  { title: 'Unit 3 Drinks I like', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I like cola.', cn: '我喜欢可乐。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I like cola.', cn: '我喜欢可乐。' },
      { speaker: 'Kitty', text: 'I like juice.', cn: '我喜欢果汁。' },
      { speaker: 'Alice', text: 'I like milk.', cn: '我喜欢牛奶。' },
      { speaker: 'Danny', text: 'I like water.', cn: '我喜欢水。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I like water.', cn: '我喜欢水。' },
    ]},
  ]},
  { title: 'Unit 4 Toys I like', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I like this ball.', cn: '我喜欢这个球。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I like this ball.', cn: '我喜欢这个球。' },
      { speaker: 'Kitty', text: 'I like this doll.', cn: '我喜欢这个娃娃。' },
      { speaker: 'Alice', text: 'I like this kite.', cn: '我喜欢这个风筝。' },
      { speaker: 'Danny', text: 'I like this bicycle.', cn: '我喜欢这辆自行车。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I like this bicycle.', cn: '我喜欢这辆自行车。' },
    ]},
  ]},
  { title: 'Unit 5 Activities', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I can skip rope.', cn: '我会跳绳。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I can skip rope.', cn: '我会跳绳。' },
      { speaker: 'Kitty', text: 'I can ride a bicycle.', cn: '我会骑自行车。' },
      { speaker: 'Alice', text: 'I can fly a kite.', cn: '我会放风筝。' },
      { speaker: 'Danny', text: 'I can play football.', cn: '我会踢足球。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I can play football.', cn: '我会踢足球。' },
    ]},
  ]},
  { title: 'Unit 6 Animals', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I like dogs.', cn: '我喜欢狗。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I like dogs.', cn: '我喜欢狗。' },
      { speaker: 'Kitty', text: 'I like cats.', cn: '我喜欢猫。' },
      { speaker: 'Alice', text: 'I like rabbits.', cn: '我喜欢兔子。' },
      { speaker: 'Danny', text: 'I like fish.', cn: '我喜欢鱼。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I like fish.', cn: '我喜欢鱼。' },
    ]},
  ]},
  ]},
  // ========== 二年级上册 ==========
  { title: '二年级上册', units: [
  { title: 'Unit 1 Hello again', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Nice to see you again!', cn: '很高兴又见到你！' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Nice to see you again!', cn: '很高兴又见到你！' },
      { speaker: 'Kitty', text: 'Nice to see you too!', cn: '我也很高兴见到你！' },
      { speaker: 'Alice', text: 'How are you?', cn: '你好吗？' },
      { speaker: 'Danny', text: 'I\'m fine. Thank you.', cn: '我很好。谢谢。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I\'m fine. Thank you.', cn: '我很好。谢谢。' },
    ]},
  ]},
  { title: 'Unit 2 I\'m Danny', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Are you Kitty?', cn: '你是Kitty吗？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Are you Kitty?', cn: '你是Kitty吗？' },
      { speaker: 'Kitty', text: 'Yes, I am.', cn: '是的。' },
      { speaker: 'Alice', text: 'Are you Danny?', cn: '你是Danny吗？' },
      { speaker: 'Danny', text: 'No, I\'m not. I\'m Eddie.', cn: '不。我是Eddie。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'No, I\'m not. I\'m Eddie.', cn: '不。我是Eddie。' },
    ]},
  ]},
  { title: 'Unit 3 A new classmate', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Miss Fang', text: 'This is our new classmate, Tom.', cn: '这是我们的新同学，Tom。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Miss Fang', text: 'This is our new classmate, Tom.', cn: '这是我们的新同学，Tom。' },
      { speaker: 'Class', text: 'Hello, Tom!', cn: '你好，Tom！' },
      { speaker: 'Tom', text: 'Hello, everyone!', cn: '大家好！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: '', text: 'Play and enjoy!', cn: '玩一玩！' },
    ]},
  ]},
  { title: 'Unit 4 Can you swim?', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Can you swim?', cn: '你会游泳吗？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Can you swim?', cn: '你会游泳吗？' },
      { speaker: 'Kitty', text: 'Yes, I can.', cn: '是的，我会。' },
      { speaker: 'Alice', text: 'Can you fly?', cn: '你会飞吗？' },
      { speaker: 'Danny', text: 'No, I can\'t!', cn: '不，我不会！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'No, I can\'t!', cn: '不，我不会！' },
    ]},
  ]},
  { title: 'Unit 5 That\'s my family', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Is she your mother?', cn: '她是你妈妈吗？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Is she your mother?', cn: '她是你妈妈吗？' },
      { speaker: 'Kitty', text: 'Yes, she is. She can make cakes.', cn: '是的。她会做蛋糕。' },
      { speaker: 'Alice', text: 'Is he your brother?', cn: '他是你哥哥吗？' },
      { speaker: 'Danny', text: 'Yes, he is. He can play football.', cn: '是的。他会踢足球。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Yes, he is. He can play football.', cn: '是的。他会踢足球。' },
    ]},
  ]},
  { title: 'Unit 6 My hair is short', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'My hair is short.', cn: '我的头发短。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'My hair is short.', cn: '我的头发短。' },
      { speaker: 'Kitty', text: 'My hair is long.', cn: '我的头发长。' },
      { speaker: 'Alice', text: 'My eyes are big.', cn: '我的眼睛大。' },
      { speaker: 'Danny', text: 'My nose is small.', cn: '我的鼻子小。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'My nose is small.', cn: '我的鼻子小。' },
    ]},
  ]},
  ]},
  // ========== 二年级下册 ==========
  { title: '二年级下册', units: [
  { title: 'Unit 1 What can you see?', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'What can you see?', cn: '你能看到什么？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'What can you see?', cn: '你能看到什么？' },
      { speaker: 'Kitty', text: 'I can see a bus.', cn: '我能看到一辆公交车。' },
      { speaker: 'Alice', text: 'I can see a car.', cn: '我能看到一辆小汽车。' },
      { speaker: 'Danny', text: 'I can see a ship.', cn: '我能看到一艘船。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I can see a ship.', cn: '我能看到一艘船。' },
    ]},
  ]},
  { title: 'Unit 2 Touch and feel', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Touch this. Is it hard?', cn: '摸这个。硬吗？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Touch this. Is it hard?', cn: '摸这个。硬吗？' },
      { speaker: 'Kitty', text: 'No, it\'s soft.', cn: '不，很软。' },
      { speaker: 'Alice', text: 'Is it smooth?', cn: '光滑吗？' },
      { speaker: 'Danny', text: 'Yes, it\'s smooth.', cn: '是的，很光滑。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Yes, it\'s smooth.', cn: '是的，很光滑。' },
    ]},
  ]},
  { title: 'Unit 3 Animals I like', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I like giraffes. They\'re tall.', cn: '我喜欢长颈鹿。它们很高。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I like giraffes. They\'re tall.', cn: '我喜欢长颈鹿。它们很高。' },
      { speaker: 'Kitty', text: 'I like elephants. They\'re big.', cn: '我喜欢大象。它们很大。' },
      { speaker: 'Alice', text: 'I like snakes. They\'re long.', cn: '我喜欢蛇。它们很长。' },
      { speaker: 'Danny', text: 'I like monkeys. They\'re funny.', cn: '我喜欢猴子。它们很有趣。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I like monkeys. They\'re funny.', cn: '我喜欢猴子。它们很有趣。' },
    ]},
  ]},
  { title: 'Unit 4 Things I like doing', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I like singing.', cn: '我喜欢唱歌。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I like singing.', cn: '我喜欢唱歌。' },
      { speaker: 'Kitty', text: 'I like dancing.', cn: '我喜欢跳舞。' },
      { speaker: 'Alice', text: 'I like painting.', cn: '我喜欢画画。' },
      { speaker: 'Danny', text: 'I like running.', cn: '我喜欢跑步。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I like running.', cn: '我喜欢跑步。' },
    ]},
  ]},
  { title: 'Unit 5 Food I like', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I like salad. It\'s healthy.', cn: '我喜欢沙拉。很健康。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I like salad. It\'s healthy.', cn: '我喜欢沙拉。很健康。' },
      { speaker: 'Kitty', text: 'I like chicken and rice.', cn: '我喜欢鸡肉饭。' },
      { speaker: 'Alice', text: 'What do you like eating?', cn: '你喜欢吃什么？' },
      { speaker: 'Danny', text: 'I like pizza!', cn: '我喜欢披萨！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I like pizza!', cn: '我喜欢披萨！' },
    ]},
  ]},
  { title: 'Unit 6 My clothes', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I have a new T-shirt.', cn: '我有一件新T恤。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I have a new T-shirt.', cn: '我有一件新T恤。' },
      { speaker: 'Kitty', text: 'I have a new dress.', cn: '我有一条新裙子。' },
      { speaker: 'Alice', text: 'These are my shorts.', cn: '这是我的短裤。' },
      { speaker: 'Danny', text: 'These are my shoes.', cn: '这是我的鞋子。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'These are my shoes.', cn: '这是我的鞋子。' },
    ]},
  ]},
  ]},
  // ========== 三年级上册 ==========
  { title: '三年级上册', units: [
  { title: 'Unit 1 How are you?', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'How are you today?', cn: '你今天好吗？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'How are you today?', cn: '你今天好吗？' },
      { speaker: 'Kitty', text: 'I\'m fine, thank you.', cn: '我很好，谢谢。' },
      { speaker: 'Alice', text: 'And you?', cn: '你呢？' },
      { speaker: 'Danny', text: 'I\'m fine, too.', cn: '我也很好。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I\'m fine, too.', cn: '我也很好。' },
    ]},
  ]},
  { title: 'Unit 2 What\'s your name?', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'What\'s your name?', cn: '你叫什么名字？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'What\'s your name?', cn: '你叫什么名字？' },
      { speaker: 'Kitty', text: 'My name is Kitty.', cn: '我叫Kitty。' },
      { speaker: 'Alice', text: 'How old are you?', cn: '你几岁了？' },
      { speaker: 'Danny', text: 'I\'m nine.', cn: '我九岁。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I\'m nine.', cn: '我九岁。' },
    ]},
  ]},
  { title: 'Unit 3 In the classroom', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Miss Fang', text: 'Open the door, please.', cn: '请打开门。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Miss Fang', text: 'Open the door, please.', cn: '请打开门。' },
      { speaker: 'Eddie', text: 'OK, Miss Fang.', cn: '好的，方老师。' },
      { speaker: 'Kitty', text: 'Close the window, please.', cn: '请关上窗户。' },
      { speaker: 'Danny', text: 'Yes, Miss Fang.', cn: '好的，方老师。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Yes, Miss Fang.', cn: '好的，方老师。' },
    ]},
  ]},
  { title: 'Unit 4 My friends', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'This is my friend. He\'s fat.', cn: '这是我的朋友。他很胖。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'This is my friend. He\'s fat.', cn: '这是我的朋友。他很胖。' },
      { speaker: 'Kitty', text: 'She\'s my friend. She\'s thin.', cn: '她是我的朋友。她很瘦。' },
      { speaker: 'Alice', text: 'We play together every day.', cn: '我们每天一起玩。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: '', text: 'Play and enjoy!', cn: '玩一玩！' },
    ]},
  ]},
  { title: 'Unit 5 My family', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Who is he?', cn: '他是谁？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Who is he?', cn: '他是谁？' },
      { speaker: 'Kitty', text: 'He\'s my father.', cn: '他是我爸爸。' },
      { speaker: 'Alice', text: 'Who is she?', cn: '她是谁？' },
      { speaker: 'Danny', text: 'She\'s my sister.', cn: '她是我姐姐。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'She\'s my sister.', cn: '她是我姐姐。' },
    ]},
  ]},
  { title: 'Unit 6 Me', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I\'m a boy. I\'m tall and thin.', cn: '我是男孩。我又高又瘦。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I\'m a boy. I\'m tall and thin.', cn: '我是男孩。我又高又瘦。' },
      { speaker: 'Kitty', text: 'I\'m a girl. I\'m short and thin.', cn: '我是女孩。我又矮又瘦。' },
      { speaker: 'Alice', text: 'My hair is long.', cn: '我头发长。' },
      { speaker: 'Danny', text: 'I can run fast.', cn: '我能跑得很快。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I can run fast.', cn: '我能跑得很快。' },
    ]},
  ]},
  ]},
  // ========== 三年级下册 ==========
  { title: '三年级下册', units: [
  { title: 'Unit 1 Colours', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'What colour is it?', cn: '它是什么颜色？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'What colour is it?', cn: '它是什么颜色？' },
      { speaker: 'Kitty', text: 'It\'s red and yellow.', cn: '红色和黄色。' },
      { speaker: 'Alice', text: 'What colour is the sky?', cn: '天空是什么颜色？' },
      { speaker: 'Danny', text: 'It\'s blue.', cn: '蓝色。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'It\'s blue.', cn: '蓝色。' },
    ]},
  ]},
  { title: 'Unit 2 Tastes', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Taste the lemon. How is it?', cn: '尝尝柠檬。怎么样？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Taste the lemon. How is it?', cn: '尝尝柠檬。怎么样？' },
      { speaker: 'Kitty', text: 'It\'s sour.', cn: '很酸。' },
      { speaker: 'Alice', text: 'Taste the candy.', cn: '尝尝糖果。' },
      { speaker: 'Danny', text: 'It\'s sweet!', cn: '很甜！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'It\'s sweet!', cn: '很甜！' },
    ]},
  ]},
  { title: 'Unit 3 Sounds', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'What can you hear?', cn: '你能听到什么？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'What can you hear?', cn: '你能听到什么？' },
      { speaker: 'Kitty', text: 'I can hear a dog.', cn: '我听到狗叫。' },
      { speaker: 'Alice', text: 'I can hear a car.', cn: '我听到汽车声。' },
      { speaker: 'Danny', text: 'I can hear a plane.', cn: '我听到飞机声。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I can hear a plane.', cn: '我听到飞机声。' },
    ]},
  ]},
  { title: 'Unit 4 Animals in the zoo', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Look at the monkeys!', cn: '看那些猴子！' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Look at the monkeys!', cn: '看那些猴子！' },
      { speaker: 'Kitty', text: 'They can climb trees.', cn: '它们能爬树。' },
      { speaker: 'Alice', text: 'I like pandas. They\'re lovely.', cn: '我喜欢熊猫。它们很可爱。' },
      { speaker: 'Danny', text: 'The lions are strong.', cn: '狮子很强壮。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'The lions are strong.', cn: '狮子很强壮。' },
    ]},
  ]},
  { title: 'Unit 5 Toys', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'What toys do you like?', cn: '你喜欢什么玩具？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'What toys do you like?', cn: '你喜欢什么玩具？' },
      { speaker: 'Kitty', text: 'I like robots. They\'re super.', cn: '我喜欢机器人。它们超棒。' },
      { speaker: 'Alice', text: 'I like dolls. They\'re beautiful.', cn: '我喜欢娃娃。它们很漂亮。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: '', text: 'Play and enjoy!', cn: '玩一玩！' },
    ]},
  ]},
  { title: 'Unit 6 Food and drinks', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'What do you have for breakfast?', cn: '你早餐吃什么？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'What do you have for breakfast?', cn: '你早餐吃什么？' },
      { speaker: 'Kitty', text: 'I have bread and milk.', cn: '我吃面包和牛奶。' },
      { speaker: 'Alice', text: 'I have noodles and eggs.', cn: '我吃面条和鸡蛋。' },
      { speaker: 'Danny', text: 'I have rice and vegetables.', cn: '我吃米饭和蔬菜。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I have rice and vegetables.', cn: '我吃米饭和蔬菜。' },
    ]},
  ]},
  ]},
  // ========== 四年级上册 ==========
  { title: '四年级上册', units: [
  { title: 'Unit 1 Meeting new people', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'This is my new friend, Jill.', cn: '这是我的新朋友，Jill。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'This is my new friend, Jill.', cn: '这是我的新朋友，Jill。' },
      { speaker: 'Kitty', text: 'Nice to meet you, Jill.', cn: '很高兴认识你，Jill。' },
      { speaker: 'Jill', text: 'Nice to meet you too.', cn: '我也很高兴认识你。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: '', text: 'Play and enjoy!', cn: '玩一玩！' },
    ]},
  ]},
  { title: 'Unit 2 Can you swim?', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Can you swim, Kitty?', cn: 'Kitty，你会游泳吗？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Can you swim, Kitty?', cn: 'Kitty，你会游泳吗？' },
      { speaker: 'Kitty', text: 'Yes, I can. I can swim fast.', cn: '是的。我游得很快。' },
      { speaker: 'Alice', text: 'Can you draw?', cn: '你会画画吗？' },
      { speaker: 'Danny', text: 'No, I can\'t. But I can sing.', cn: '不会。但我会唱歌。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'No, I can\'t. But I can sing.', cn: '不会。但我会唱歌。' },
    ]},
  ]},
  { title: 'Unit 3 Are you happy?', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Are you happy?', cn: '你开心吗？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Are you happy?', cn: '你开心吗？' },
      { speaker: 'Kitty', text: 'Yes, I\'m happy. I have a new bike.', cn: '是的，我很开心。我有一辆新自行车。' },
      { speaker: 'Alice', text: 'Are you sad, Danny?', cn: '你难过吗，Danny？' },
      { speaker: 'Danny', text: 'No, I\'m hungry!', cn: '不，我饿了！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'No, I\'m hungry!', cn: '不，我饿了！' },
    ]},
  ]},
  { title: 'Unit 4 Do you have any cousins?', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Do you have any cousins?', cn: '你有表兄弟姐妹吗？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Do you have any cousins?', cn: '你有表兄弟姐妹吗？' },
      { speaker: 'Kitty', text: 'Yes, I have one cousin.', cn: '有，我有一个表姐。' },
      { speaker: 'Alice', text: 'I have two uncles.', cn: '我有两个叔叔。' },
      { speaker: 'Danny', text: 'I have a big family.', cn: '我有一个大家庭。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I have a big family.', cn: '我有一个大家庭。' },
    ]},
  ]},
  { title: 'Unit 5 My home', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Where is the bathroom?', cn: '浴室在哪里？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Where is the bathroom?', cn: '浴室在哪里？' },
      { speaker: 'Kitty', text: 'It\'s next to my bedroom.', cn: '在我卧室旁边。' },
      { speaker: 'Alice', text: 'The kitchen is big.', cn: '厨房很大。' },
      { speaker: 'Danny', text: 'I like the living room best.', cn: '我最喜欢客厅。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I like the living room best.', cn: '我最喜欢客厅。' },
    ]},
  ]},
  { title: 'Unit 6 My parents', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'What does your mother do?', cn: '你妈妈做什么工作？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'What does your mother do?', cn: '你妈妈做什么工作？' },
      { speaker: 'Kitty', text: 'She\'s a nurse. She helps sick people.', cn: '她是护士。她帮助病人。' },
      { speaker: 'Alice', text: 'My father is a fireman.', cn: '我爸爸是消防员。' },
      { speaker: 'Danny', text: 'He\'s very brave.', cn: '他很勇敢。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'He\'s very brave.', cn: '他很勇敢。' },
    ]},
  ]},
  ]},
  // ========== 四年级下册 ==========
  { title: '四年级下册', units: [
  { title: 'Unit 1 Touch and feel', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'How does it feel?', cn: '摸起来怎么样？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'How does it feel?', cn: '摸起来怎么样？' },
      { speaker: 'Kitty', text: 'It\'s hard and smooth.', cn: '又硬又光滑。' },
      { speaker: 'Alice', text: 'Is it soft?', cn: '软吗？' },
      { speaker: 'Danny', text: 'No, it\'s rough.', cn: '不，很粗糙。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'No, it\'s rough.', cn: '不，很粗糙。' },
    ]},
  ]},
  { title: 'Unit 2 Smell and taste', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Smell this. Is it nice?', cn: '闻闻这个。好闻吗？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Smell this. Is it nice?', cn: '闻闻这个。好闻吗？' },
      { speaker: 'Kitty', text: 'Yes, it\'s a flower.', cn: '是的，是一朵花。' },
      { speaker: 'Alice', text: 'Taste this juice.', cn: '尝尝这个果汁。' },
      { speaker: 'Danny', text: 'It\'s sweet and cold.', cn: '又甜又凉。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'It\'s sweet and cold.', cn: '又甜又凉。' },
    ]},
  ]},
  { title: 'Unit 3 Look at the shadow!', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Look at my shadow!', cn: '看我的影子！' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Look at my shadow!', cn: '看我的影子！' },
      { speaker: 'Kitty', text: 'It\'s long in the afternoon.', cn: '下午的时候很长。' },
      { speaker: 'Alice', text: 'The shadow goes away at night.', cn: '晚上影子就消失了。' },
      { speaker: 'Danny', text: 'It\'s very interesting!', cn: '太有趣了！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'It\'s very interesting!', cn: '太有趣了！' },
    ]},
  ]},
  { title: 'Unit 4 Subjects', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'What subjects do you like?', cn: '你喜欢什么科目？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'What subjects do you like?', cn: '你喜欢什么科目？' },
      { speaker: 'Kitty', text: 'I like English and Maths.', cn: '我喜欢英语和数学。' },
      { speaker: 'Alice', text: 'I like Music and Art.', cn: '我喜欢音乐和美术。' },
      { speaker: 'Danny', text: 'PE is my favourite subject.', cn: '体育是我最喜欢的科目。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'PE is my favourite subject.', cn: '体育是我最喜欢的科目。' },
    ]},
  ]},
  { title: 'Unit 5 Sport', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Let\'s play football together.', cn: '我们一起踢足球吧。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Let\'s play football together.', cn: '我们一起踢足球吧。' },
      { speaker: 'Kitty', text: 'Sorry, I can\'t play football.', cn: '抱歉，我不会踢足球。' },
      { speaker: 'Alice', text: 'I can play badminton.', cn: '我会打羽毛球。' },
      { speaker: 'Danny', text: 'Let\'s play badminton then!', cn: '那我们来打羽毛球吧！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Let\'s play badminton then!', cn: '那我们来打羽毛球吧！' },
    ]},
  ]},
  { title: 'Unit 6 Music', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I can play the guitar.', cn: '我会弹吉他。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I can play the guitar.', cn: '我会弹吉他。' },
      { speaker: 'Kitty', text: 'I can play the piano.', cn: '我会弹钢琴。' },
      { speaker: 'Alice', text: 'I can play the violin.', cn: '我会拉小提琴。' },
      { speaker: 'Danny', text: 'Does the triangle count?', cn: '三角铁算吗？' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Does the triangle count?', cn: '三角铁算吗？' },
    ]},
  ]},
  ]},
  // ========== 五年级上册 ==========
  { title: '五年级上册', units: [
  { title: 'Unit 1 My birthday', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'When\'s your birthday?', cn: '你的生日是什么时候？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'When\'s your birthday?', cn: '你的生日是什么时候？' },
      { speaker: 'Kitty', text: 'It\'s on the first of October.', cn: '十月一日。' },
      { speaker: 'Alice', text: 'That\'s National Day!', cn: '那是国庆节！' },
      { speaker: 'Danny', text: 'What a special birthday!', cn: '好特别的生日！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'What a special birthday!', cn: '好特别的生日！' },
    ]},
  ]},
  { title: 'Unit 2 Going to school', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'How do you go to school?', cn: '你怎么上学的？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'How do you go to school?', cn: '你怎么上学的？' },
      { speaker: 'Kitty', text: 'I go to school by underground.', cn: '我坐地铁上学。' },
      { speaker: 'Alice', text: 'I walk to school.', cn: '我走路上学。' },
      { speaker: 'Danny', text: 'My father takes me by car.', cn: '我爸爸开车送我。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'My father takes me by car.', cn: '我爸爸开车送我。' },
    ]},
  ]},
  { title: 'Unit 3 My future', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'What do you want to be?', cn: '你想做什么？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'What do you want to be?', cn: '你想做什么？' },
      { speaker: 'Kitty', text: 'I want to be a teacher.', cn: '我想做老师。' },
      { speaker: 'Alice', text: 'I want to be a doctor.', cn: '我想做医生。' },
      { speaker: 'Danny', text: 'I want to be a pilot!', cn: '我想做飞行员！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I want to be a pilot!', cn: '我想做飞行员！' },
    ]},
  ]},
  { title: 'Unit 4 Grandparents', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I visit my grandparents at weekends.', cn: '我周末看望爷爷奶奶。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I visit my grandparents at weekends.', cn: '我周末看望爷爷奶奶。' },
      { speaker: 'Kitty', text: 'My grandma always cooks nice food.', cn: '我奶奶总是做好吃的。' },
      { speaker: 'Alice', text: 'My grandpa tells interesting stories.', cn: '我爷爷讲有趣的故事。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: '', text: 'Play and enjoy!', cn: '玩一玩！' },
    ]},
  ]},
  { title: 'Unit 5 Friends', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'We both like playing football.', cn: '我们都喜欢踢足球。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'We both like playing football.', cn: '我们都喜欢踢足球。' },
      { speaker: 'Kitty', text: 'We are in the same class.', cn: '我们在同一个班。' },
      { speaker: 'Alice', text: 'We help each other.', cn: '我们互相帮助。' },
      { speaker: 'Danny', text: 'Friends are important!', cn: '朋友很重要！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Friends are important!', cn: '朋友很重要！' },
    ]},
  ]},
  { title: 'Unit 6 Family life', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Where are you, Dad?', cn: '爸爸，你在哪里？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Where are you, Dad?', cn: '爸爸，你在哪里？' },
      { speaker: 'Dad', text: 'I\'m in the living room. I\'m watching TV.', cn: '我在客厅。我在看电视。' },
      { speaker: 'Eddie', text: 'Where is Mum?', cn: '妈妈在哪里？' },
      { speaker: 'Dad', text: 'She\'s in the kitchen. She\'s cooking.', cn: '她在厨房。在做饭。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Dad', text: 'She\'s in the kitchen. She\'s cooking.', cn: '她在厨房。在做饭。' },
    ]},
  ]},
  ]},
  // ========== 五年级下册 ==========
  { title: '五年级下册', units: [
  { title: 'Unit 1 Tidy up!', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mum', text: 'Tidy up your room, please.', cn: '请整理你的房间。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Mum', text: 'Tidy up your room, please.', cn: '请整理你的房间。' },
      { speaker: 'Eddie', text: 'OK, Mum. The socks go in the drawer.', cn: '好的，妈妈。袜子放抽屉里。' },
      { speaker: 'Kitty', text: 'This is yours. That is mine.', cn: '这是你的。那是我的。' },
      { speaker: 'Danny', text: 'Whose cap is this?', cn: '这是谁的帽子？' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Whose cap is this?', cn: '这是谁的帽子？' },
    ]},
  ]},
  { title: 'Unit 2 Our new home', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Which room do you like?', cn: '你喜欢哪个房间？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Which room do you like?', cn: '你喜欢哪个房间？' },
      { speaker: 'Kitty', text: 'I like the study. It\'s quiet.', cn: '我喜欢书房。很安静。' },
      { speaker: 'Alice', text: 'The garden is beautiful.', cn: '花园很漂亮。' },
      { speaker: 'Danny', text: 'Why do wild geese change homes?', cn: '大雁为什么要搬家？' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Why do wild geese change homes?', cn: '大雁为什么要搬家？' },
    ]},
  ]},
  { title: 'Unit 3 In the future', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'What will you do in the future?', cn: '将来你会做什么？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'What will you do in the future?', cn: '将来你会做什么？' },
      { speaker: 'Kitty', text: 'I\'ll wear glasses. I\'ll be a teacher.', cn: '我会戴眼镜。我会做老师。' },
      { speaker: 'Alice', text: 'I\'ll live in Beijing. I\'ll be a writer.', cn: '我会住在北京。我会做作家。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: '', text: 'Play and enjoy!', cn: '玩一玩！' },
    ]},
  ]},
  { title: 'Unit 4 Reading is fun', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I\'m going to read a book every week.', cn: '我打算每周读一本书。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I\'m going to read a book every week.', cn: '我打算每周读一本书。' },
      { speaker: 'Kitty', text: 'Reading is fun. I like storybooks.', cn: '阅读很有趣。我喜欢故事书。' },
      { speaker: 'Alice', text: 'Books are our best friends.', cn: '书是我们最好的朋友。' },
      { speaker: 'Danny', text: 'I want to buy a dictionary.', cn: '我想买一本字典。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I want to buy a dictionary.', cn: '我想买一本字典。' },
    ]},
  ]},
  { title: 'Unit 5 At the weekend', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'What are you going to do this weekend?', cn: '这个周末你要做什么？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'What are you going to do this weekend?', cn: '这个周末你要做什么？' },
      { speaker: 'Kitty', text: 'I\'m going to see a film with my parents.', cn: '我要和父母看电影。' },
      { speaker: 'Alice', text: 'I\'m going to visit a museum.', cn: '我要参观博物馆。' },
      { speaker: 'Danny', text: 'I\'m going to play football.', cn: '我要去踢足球。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I\'m going to play football.', cn: '我要去踢足球。' },
    ]},
  ]},
  { title: 'Unit 6 Holidays', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'How\'s your holiday?', cn: '假期怎么样？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'How\'s your holiday?', cn: '假期怎么样？' },
      { speaker: 'Kitty', text: 'Great! I went to Sanya.', cn: '很棒！我去了三亚。' },
      { speaker: 'Alice', text: 'I went to the beach and swam every day.', cn: '我去了海滩，每天游泳。' },
      { speaker: 'Danny', text: 'I want to go on holiday too!', cn: '我也想去度假！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I want to go on holiday too!', cn: '我也想去度假！' },
    ]},
  ]},
  ]},
  // ========== 六年级上册 ==========
  { title: '六年级上册', units: [
  { title: 'Unit 1 Growing up', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Look at this photo. I was a cute baby.', cn: '看这张照片。我小时候好可爱。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Look at this photo. I was a cute baby.', cn: '看这张照片。我小时候好可爱。' },
      { speaker: 'Kitty', text: 'I was short and thin then.', cn: '那时我又矮又瘦。' },
      { speaker: 'Alice', text: 'Now I\'m tall and strong.', cn: '现在我又高又壮。' },
      { speaker: 'Danny', text: 'Time flies!', cn: '时间过得真快！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Time flies!', cn: '时间过得真快！' },
    ]},
  ]},
  { title: 'Unit 2 My summer holiday', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'How was your summer holiday?', cn: '暑假怎么样？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'How was your summer holiday?', cn: '暑假怎么样？' },
      { speaker: 'Kitty', text: 'It was wonderful. I visited my grandparents.', cn: '太棒了。我去看了爷爷奶奶。' },
      { speaker: 'Alice', text: 'I went to Beijing. I saw the Great Wall.', cn: '我去了北京。我看了长城。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: '', text: 'Play and enjoy!', cn: '玩一玩！' },
    ]},
  ]},
  { title: 'Unit 3 Healthy or unhealthy?', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I eat a lot of vegetables and fruit.', cn: '我吃很多蔬菜水果。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I eat a lot of vegetables and fruit.', cn: '我吃很多蔬菜水果。' },
      { speaker: 'Kitty', text: 'That\'s healthy!', cn: '那很健康！' },
      { speaker: 'Alice', text: 'I like hamburgers. Are they healthy?', cn: '我喜欢汉堡。健康吗？' },
      { speaker: 'Danny', text: 'Not really. Eat more rice and fish.', cn: '不太健康。多吃米饭和鱼。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Not really. Eat more rice and fish.', cn: '不太健康。多吃米饭和鱼。' },
    ]},
  ]},
  { title: 'Unit 4 Our neighbours', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Who are your neighbours?', cn: '你的邻居是谁？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Who are your neighbours?', cn: '你的邻居是谁？' },
      { speaker: 'Kitty', text: 'The Chens are our neighbours.', cn: '陈家是我们的邻居。' },
      { speaker: 'Alice', text: 'They are very nice people.', cn: '他们是很好的人。' },
      { speaker: 'Danny', text: 'We should be good neighbours.', cn: '我们应该做好邻居。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'We should be good neighbours.', cn: '我们应该做好邻居。' },
    ]},
  ]},
  { title: 'Unit 5 Animals in danger', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'Pandas are in danger. There are not many left.', cn: '熊猫濒危了。剩下不多了。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'Pandas are in danger. There are not many left.', cn: '熊猫濒危了。剩下不多了。' },
      { speaker: 'Kitty', text: 'We must protect them.', cn: '我们必须保护它们。' },
      { speaker: 'Alice', text: 'Blue whales are in danger too.', cn: '蓝鲸也濒危了。' },
      { speaker: 'Danny', text: 'Let\'s do something to help.', cn: '我们来帮忙做些什么吧。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Let\'s do something to help.', cn: '我们来帮忙做些什么吧。' },
    ]},
  ]},
  { title: 'Unit 6 E-friends', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I have an e-friend from the UK.', cn: '我有一个来自英国的网友。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I have an e-friend from the UK.', cn: '我有一个来自英国的网友。' },
      { speaker: 'Kitty', text: 'We chat on the Internet.', cn: '我们在网上聊天。' },
      { speaker: 'Alice', text: 'It\'s a good way to learn English.', cn: '是学英语的好方法。' },
      { speaker: 'Danny', text: 'I want an e-friend too!', cn: '我也想要一个网友！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I want an e-friend too!', cn: '我也想要一个网友！' },
    ]},
  ]},
  ]},
  // ========== 六年级下册 ==========
  { title: '六年级下册', units: [
  { title: 'Unit 1 You and me', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I\'m 162 centimetres tall. How tall are you?', cn: '我162厘米高。你多高？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I\'m 162 centimetres tall. How tall are you?', cn: '我162厘米高。你多高？' },
      { speaker: 'Kitty', text: 'I\'m 158 centimetres. You\'re taller.', cn: '我158厘米。你更高。' },
      { speaker: 'Alice', text: 'I weigh 48 kilograms.', cn: '我重48公斤。' },
      { speaker: 'Danny', text: 'You\'re heavier than me!', cn: '你比我重！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'You\'re heavier than me!', cn: '你比我重！' },
    ]},
  ]},
  { title: 'Unit 2 Changes in our lives', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'In the past, people used horses.', cn: '过去，人们用马。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'In the past, people used horses.', cn: '过去，人们用马。' },
      { speaker: 'Kitty', text: 'Now we drive cars and take planes.', cn: '现在我们开车和坐飞机。' },
      { speaker: 'Alice', text: 'Life is more convenient now.', cn: '现在生活更方便了。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: '', text: 'Play and enjoy!', cn: '玩一玩！' },
    ]},
  ]},
  { title: 'Unit 3 Our school in the future', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'What will our school be like in the future?', cn: '未来我们学校会是什么样？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'What will our school be like in the future?', cn: '未来我们学校会是什么样？' },
      { speaker: 'Kitty', text: 'Students will use computers for all lessons.', cn: '学生所有课都会用电脑。' },
      { speaker: 'Alice', text: 'We won\'t carry heavy schoolbags.', cn: '我们不用背重书包了。' },
      { speaker: 'Danny', text: 'I hope robots will teach us!', cn: '我希望机器人教我们！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'I hope robots will teach us!', cn: '我希望机器人教我们！' },
    ]},
  ]},
  { title: 'Unit 4 Art', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I like Chinese ink paintings.', cn: '我喜欢中国水墨画。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I like Chinese ink paintings.', cn: '我喜欢中国水墨画。' },
      { speaker: 'Kitty', text: 'My favourite is oil painting.', cn: '我最喜欢油画。' },
      { speaker: 'Alice', text: 'Art makes life beautiful.', cn: '艺术让生活更美。' },
      { speaker: 'Danny', text: 'Let\'s go to the art museum!', cn: '我们去美术馆吧！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Let\'s go to the art museum!', cn: '我们去美术馆吧！' },
    ]},
  ]},
  { title: 'Unit 5 Crafts', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'What are you making?', cn: '你在做什么？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'What are you making?', cn: '你在做什么？' },
      { speaker: 'Kitty', text: 'I\'m making a paper crown.', cn: '我在做一顶纸皇冠。' },
      { speaker: 'Alice', text: 'I need some glue and scissors.', cn: '我需要一些胶水和剪刀。' },
      { speaker: 'Danny', text: 'Look, I made a model plane!', cn: '看，我做了一个飞机模型！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Look, I made a model plane!', cn: '看，我做了一个飞机模型！' },
    ]},
  ]},
  { title: 'Unit 6 PE lessons', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'We run long races in PE lessons.', cn: '体育课我们跑长跑。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'We run long races in PE lessons.', cn: '体育课我们跑长跑。' },
      { speaker: 'Kitty', text: 'We do the high jump and long jump.', cn: '我们跳高和跳远。' },
      { speaker: 'Alice', text: 'We should do warm-up exercises first.', cn: '我们应该先做热身运动。' },
      { speaker: 'Danny', text: 'Exercise keeps us healthy!', cn: '运动让我们健康！' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Exercise keeps us healthy!', cn: '运动让我们健康！' },
    ]},
  ]},
  { title: 'Unit 7 Helping others', page: 'P62-71', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'I helped an old lady cross the street.', cn: '我帮一位老奶奶过马路。' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'I helped an old lady cross the street.', cn: '我帮一位老奶奶过马路。' },
      { speaker: 'Kitty', text: 'I gave my seat to a pregnant woman.', cn: '我给一位孕妇让了座。' },
      { speaker: 'Alice', text: 'Helping others makes us happy.', cn: '帮助别人让我们快乐。' },
      { speaker: 'Danny', text: 'A little kindness goes a long way.', cn: '一点善意走很远。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'A little kindness goes a long way.', cn: '一点善意走很远。' },
    ]},
  ]},
  { title: 'Unit 8 Reading signs', page: 'P72-81', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Eddie', text: 'What does this sign mean?', cn: '这个标志是什么意思？' },
    ]},
    { type: 'talk', title: 'Let\\\'s talk', dialogues: [
      { speaker: 'Eddie', text: 'What does this sign mean?', cn: '这个标志是什么意思？' },
      { speaker: 'Kitty', text: 'It means "No swimming."', cn: '意思是"禁止游泳"。' },
      { speaker: 'Alice', text: 'Look at that sign. It says "No smoking."', cn: '看那个标志。写着"禁止吸烟"。' },
      { speaker: 'Danny', text: 'Signs help us stay safe.', cn: '标志帮助我们保持安全。' },
    ]},
    { type: 'learn', title: 'Let\\\'s learn', dialogues: [
      { speaker: '', text: 'Learn and say.', cn: '学一学，说一说。' },
    ]},
    { type: 'activity', title: 'Let\\\'s play', dialogues: [
      { speaker: 'Danny', text: 'Signs help us stay safe.', cn: '标志帮助我们保持安全。' },
    ]},
  ]},
  ]},
];
