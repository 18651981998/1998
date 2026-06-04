// data/texts-joinin.js — 外研版（Join In版）3-6年级课文对话
const joininTexts = [
  // ========== 三年级上册 ==========
  { title: '三年级上册', units: [
  { title: 'Unit 1 Hello', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'Hello, I\'m Toby!', cn: '你好，我是Toby！' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'Hello, I\'m Toby!', cn: '你好，我是Toby！' },
      { speaker: 'Pit', text: 'Hi, I\'m Pit.', cn: '嗨，我是Pit。' },
      { speaker: 'Pat', text: 'Hello, I\'m Pat. What\'s your name?', cn: '你好，我是Pat。你叫什么名字？' },
      { speaker: 'Sandy', text: 'My name is Sandy.', cn: '我叫Sandy。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'My name is Sandy.', cn: '我叫Sandy。' },
    ]},
  ]},
  { title: 'Unit 2 Numbers', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'How many pencils?', cn: '多少支铅笔？' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'How many pencils?', cn: '多少支铅笔？' },
      { speaker: 'Pit', text: 'One, two, three. Three pencils.', cn: '一、二、三。三支铅笔。' },
      { speaker: 'Pat', text: 'How old are you?', cn: '你几岁了？' },
      { speaker: 'Sandy', text: 'I\'m eight.', cn: '我八岁。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'I\'m eight.', cn: '我八岁。' },
    ]},
  ]},
  { title: 'Unit 3 Colours', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'What colour is it?', cn: '它是什么颜色？' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'What colour is it?', cn: '它是什么颜色？' },
      { speaker: 'Toby', text: 'It\'s red.', cn: '红色。' },
      { speaker: 'Sandy', text: 'I like blue.', cn: '我喜欢蓝色。' },
      { speaker: 'Pit', text: 'My bag is green.', cn: '我的书包是绿色的。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'My bag is green.', cn: '我的书包是绿色的。' },
    ]},
  ]},
  { title: 'Unit 4 School', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'This is my school.', cn: '这是我的学校。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'This is my school.', cn: '这是我的学校。' },
      { speaker: 'Pit', text: 'It\'s big and nice.', cn: '又大又漂亮。' },
      { speaker: 'Pat', text: 'Open your book, please.', cn: '请打开书。' },
      { speaker: 'Sandy', text: 'Close the door.', cn: '关上门。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'Close the door.', cn: '关上门。' },
    ]},
  ]},
  { title: 'Unit 5 My body', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'Touch your nose.', cn: '摸你的鼻子。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'Touch your nose.', cn: '摸你的鼻子。' },
      { speaker: 'Toby', text: 'Touch your ears.', cn: '摸你的耳朵。' },
      { speaker: 'Sandy', text: 'Shake your body.', cn: '摇动你的身体。' },
      { speaker: 'Pit', text: 'Clap your hands.', cn: '拍手。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'Clap your hands.', cn: '拍手。' },
    ]},
  ]},
  { title: 'Unit 6 My classroom', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'What\'s in the classroom?', cn: '教室里有什么？' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'What\'s in the classroom?', cn: '教室里有什么？' },
      { speaker: 'Pit', text: 'A blackboard, desks and chairs.', cn: '一块黑板、书桌和椅子。' },
      { speaker: 'Pat', text: 'Point to the window.', cn: '指向窗户。' },
      { speaker: 'Sandy', text: 'Sit down, please.', cn: '请坐下。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'Sit down, please.', cn: '请坐下。' },
    ]},
  ]},
  ]},
  // ========== 三年级下册 ==========
  { title: '三年级下册', units: [
  { title: 'Unit 1 Pets', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'I\'ve got a pet.', cn: '我有一只宠物。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'I\'ve got a pet.', cn: '我有一只宠物。' },
      { speaker: 'Pit', text: 'Is it a cat?', cn: '是一只猫吗？' },
      { speaker: 'Toby', text: 'No, it\'s a dog.', cn: '不，是一只狗。' },
      { speaker: 'Sandy', text: 'I\'ve got a hamster.', cn: '我有一只仓鼠。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'I\'ve got a hamster.', cn: '我有一只仓鼠。' },
    ]},
  ]},
  { title: 'Unit 2 Clothes', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'I like your T-shirt.', cn: '我喜欢你的T恤。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'I like your T-shirt.', cn: '我喜欢你的T恤。' },
      { speaker: 'Sandy', text: 'Thank you. It\'s new.', cn: '谢谢。是新的。' },
      { speaker: 'Toby', text: 'Put on your cap.', cn: '戴上你的帽子。' },
      { speaker: 'Pit', text: 'Take off your shoes.', cn: '脱下鞋子。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'Take off your shoes.', cn: '脱下鞋子。' },
    ]},
  ]},
  { title: 'Unit 3 Feelings', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'How are you feeling?', cn: '你感觉怎么样？' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'How are you feeling?', cn: '你感觉怎么样？' },
      { speaker: 'Pit', text: 'I\'m happy. I\'ve got a new toy.', cn: '我很开心。我有一个新玩具。' },
      { speaker: 'Pat', text: 'Are you sad?', cn: '你难过吗？' },
      { speaker: 'Sandy', text: 'No, I\'m tired.', cn: '不，我累了。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'No, I\'m tired.', cn: '不，我累了。' },
    ]},
  ]},
  { title: 'Unit 4 Food', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'I like pizza.', cn: '我喜欢披萨。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'I like pizza.', cn: '我喜欢披萨。' },
      { speaker: 'Toby', text: 'I like hamburgers and chips.', cn: '我喜欢汉堡和薯条。' },
      { speaker: 'Sandy', text: 'Do you like ice cream?', cn: '你喜欢冰淇淋吗？' },
      { speaker: 'Pit', text: 'Yes, I do. It\'s yummy!', cn: '是的。很好吃！' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'Yes, I do. It\'s yummy!', cn: '是的。很好吃！' },
    ]},
  ]},
  { title: 'Unit 5 Free time', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'I can ride a bike.', cn: '我会骑自行车。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'I can ride a bike.', cn: '我会骑自行车。' },
      { speaker: 'Pit', text: 'I can play football.', cn: '我会踢足球。' },
      { speaker: 'Pat', text: 'Can you swim?', cn: '你会游泳吗？' },
      { speaker: 'Sandy', text: 'Yes, I can swim very well.', cn: '是的，我游得很好。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'Yes, I can swim very well.', cn: '是的，我游得很好。' },
    ]},
  ]},
  { title: 'Unit 6 Holidays', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'It\'s my birthday today!', cn: '今天是我的生日！' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'It\'s my birthday today!', cn: '今天是我的生日！' },
      { speaker: 'All', text: 'Happy birthday to you!', cn: '生日快乐！' },
      { speaker: 'Toby', text: 'A present for you.', cn: '给你的礼物。' },
      { speaker: 'Sandy', text: 'Let\'s have a party!', cn: '我们开派对吧！' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'Let\'s have a party!', cn: '我们开派对吧！' },
    ]},
  ]},
  ]},
  // ========== 四年级上册 ==========
  { title: '四年级上册', units: [
  { title: 'Unit 1 My friends', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'This is my friend, Bob.', cn: '这是我的朋友，Bob。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'This is my friend, Bob.', cn: '这是我的朋友，Bob。' },
      { speaker: 'Pit', text: 'He\'s tall and strong.', cn: '他又高又壮。' },
      { speaker: 'Pat', text: 'She\'s my friend. She has long hair.', cn: '她是我的朋友。她有长头发。' },
      { speaker: 'Sandy', text: 'She\'s very nice.', cn: '她很好。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'She\'s very nice.', cn: '她很好。' },
    ]},
  ]},
  { title: 'Unit 2 My week', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'What day is it today?', cn: '今天星期几？' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'What day is it today?', cn: '今天星期几？' },
      { speaker: 'Toby', text: 'It\'s Monday. We have English today.', cn: '星期一。今天有英语课。' },
      { speaker: 'Sandy', text: 'I like Friday. We have PE.', cn: '我喜欢星期五。有体育课。' },
      { speaker: 'Pit', text: 'On Saturday, I play football.', cn: '星期六我踢足球。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'On Saturday, I play football.', cn: '星期六我踢足球。' },
    ]},
  ]},
  { title: 'Unit 3 In the classroom', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'Where\'s my pencil?', cn: '我的铅笔在哪里？' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'Where\'s my pencil?', cn: '我的铅笔在哪里？' },
      { speaker: 'Pit', text: 'It\'s in your bag.', cn: '在你书包里。' },
      { speaker: 'Pat', text: 'The book is on the desk.', cn: '书在书桌上。' },
      { speaker: 'Sandy', text: 'The ruler is under the chair.', cn: '尺子在椅子下面。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'The ruler is under the chair.', cn: '尺子在椅子下面。' },
    ]},
  ]},
  { title: 'Unit 4 My room', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'Welcome to my room!', cn: '欢迎来我的房间！' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'Welcome to my room!', cn: '欢迎来我的房间！' },
      { speaker: 'Toby', text: 'There is a bed and a desk.', cn: '有一张床和一张书桌。' },
      { speaker: 'Sandy', text: 'There are books on the shelf.', cn: '书架上有书。' },
      { speaker: 'Pit', text: 'I like your room. It\'s tidy.', cn: '我喜欢你的房间。很整洁。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'I like your room. It\'s tidy.', cn: '我喜欢你的房间。很整洁。' },
    ]},
  ]},
  { title: 'Unit 5 At the zoo', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'Look at the monkeys!', cn: '看那些猴子！' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'Look at the monkeys!', cn: '看那些猴子！' },
      { speaker: 'Pit', text: 'They\'re funny. They\'re climbing.', cn: '它们很有趣。它们在爬。' },
      { speaker: 'Pat', text: 'The pandas are eating bamboo.', cn: '熊猫在吃竹子。' },
      { speaker: 'Sandy', text: 'I love the zoo!', cn: '我喜欢动物园！' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'I love the zoo!', cn: '我喜欢动物园！' },
    ]},
  ]},
  { title: 'Unit 6 Time', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'What time is it?', cn: '几点了？' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'What time is it?', cn: '几点了？' },
      { speaker: 'Toby', text: 'It\'s seven o\'clock. Time to get up.', cn: '七点了。该起床了。' },
      { speaker: 'Sandy', text: 'It\'s eight o\'clock. Time for school.', cn: '八点了。该上学了。' },
      { speaker: 'Pit', text: 'It\'s nine o\'clock. Time for bed.', cn: '九点了。该睡觉了。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'It\'s nine o\'clock. Time for bed.', cn: '九点了。该睡觉了。' },
    ]},
  ]},
  ]},
  // ========== 四年级下册 ==========
  { title: '四年级下册', units: [
  { title: 'Unit 1 Seasons', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'Spring is warm. I can see flowers.', cn: '春天暖和。我能看到花。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'Spring is warm. I can see flowers.', cn: '春天暖和。我能看到花。' },
      { speaker: 'Pit', text: 'Summer is hot. I can swim.', cn: '夏天热。我能游泳。' },
      { speaker: 'Pat', text: 'Autumn is cool. I can fly a kite.', cn: '秋天凉爽。我能放风筝。' },
      { speaker: 'Sandy', text: 'Winter is cold. I can make a snowman.', cn: '冬天冷。我能堆雪人。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'Winter is cold. I can make a snowman.', cn: '冬天冷。我能堆雪人。' },
    ]},
  ]},
  { title: 'Unit 2 Weather', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'What\'s the weather like today?', cn: '今天天气怎么样？' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'What\'s the weather like today?', cn: '今天天气怎么样？' },
      { speaker: 'Toby', text: 'It\'s sunny and warm.', cn: '晴天，暖和。' },
      { speaker: 'Sandy', text: 'Is it cold outside?', cn: '外面冷吗？' },
      { speaker: 'Pit', text: 'Yes, put on your coat.', cn: '是的，穿上外套。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'Yes, put on your coat.', cn: '是的，穿上外套。' },
    ]},
  ]},
  { title: 'Unit 3 On the farm', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'Look at the cows! They\'re big.', cn: '看那些奶牛！它们很大。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'Look at the cows! They\'re big.', cn: '看那些奶牛！它们很大。' },
      { speaker: 'Pit', text: 'These are sheep. They\'re white.', cn: '这些是羊。它们很白。' },
      { speaker: 'Pat', text: 'I like horses. They can run fast.', cn: '我喜欢马。它们跑得快。' },
      { speaker: 'Sandy', text: 'The chickens are small.', cn: '小鸡很小。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'The chickens are small.', cn: '小鸡很小。' },
    ]},
  ]},
  { title: 'Unit 4 In town', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'Excuse me, where\'s the cinema?', cn: '打扰一下，电影院在哪里？' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'Excuse me, where\'s the cinema?', cn: '打扰一下，电影院在哪里？' },
      { speaker: 'Toby', text: 'Go straight on, then turn left.', cn: '直走，然后左转。' },
      { speaker: 'Sandy', text: 'Is there a supermarket near here?', cn: '附近有超市吗？' },
      { speaker: 'Pit', text: 'Yes, it\'s next to the park.', cn: '有，在公园旁边。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'Yes, it\'s next to the park.', cn: '有，在公园旁边。' },
    ]},
  ]},
  { title: 'Unit 5 Sport', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'I can play basketball.', cn: '我会打篮球。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'I can play basketball.', cn: '我会打篮球。' },
      { speaker: 'Pit', text: 'I can run very fast.', cn: '我跑得很快。' },
      { speaker: 'Pat', text: 'Can you play table tennis?', cn: '你会打乒乓球吗？' },
      { speaker: 'Sandy', text: 'No, but I can swim.', cn: '不会，但我会游泳。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'No, but I can swim.', cn: '不会，但我会游泳。' },
    ]},
  ]},
  { title: 'Unit 6 Holidays', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'I\'m going to the beach this summer.', cn: '今年夏天我要去海滩。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'I\'m going to the beach this summer.', cn: '今年夏天我要去海滩。' },
      { speaker: 'Toby', text: 'I\'m going to visit my grandma.', cn: '我要去看我奶奶。' },
      { speaker: 'Sandy', text: 'I\'m going to learn to swim.', cn: '我要学游泳。' },
      { speaker: 'Pit', text: 'Have a good holiday!', cn: '假期愉快！' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'Have a good holiday!', cn: '假期愉快！' },
    ]},
  ]},
  ]},
  // ========== 五年级上册 ==========
  { title: '五年级上册', units: [
  { title: 'Unit 1 My family', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'This is my family photo.', cn: '这是我的全家福。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'This is my family photo.', cn: '这是我的全家福。' },
      { speaker: 'Pit', text: 'My father is a doctor. My mother is a nurse.', cn: '我爸爸是医生。我妈妈是护士。' },
      { speaker: 'Pat', text: 'I have a younger brother. He\'s very cute.', cn: '我有个弟弟。他很可爱。' },
      { speaker: 'Sandy', text: 'We often have dinner together.', cn: '我们经常一起吃晚饭。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'We often have dinner together.', cn: '我们经常一起吃晚饭。' },
    ]},
  ]},
  { title: 'Unit 2 Mascots', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'Look at my mascot. It\'s a lucky charm.', cn: '看我的吉祥物。是个幸运符。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'Look at my mascot. It\'s a lucky charm.', cn: '看我的吉祥物。是个幸运符。' },
      { speaker: 'Toby', text: 'I have a toy elephant. It brings me luck.', cn: '我有一只玩具大象。它带给我幸运。' },
      { speaker: 'Sandy', text: 'My mascot is a little bell.', cn: '我的吉祥物是个小铃铛。' },
      { speaker: 'Pit', text: 'Mascots are very popular.', cn: '吉祥物很受欢迎。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'Mascots are very popular.', cn: '吉祥物很受欢迎。' },
    ]},
  ]},
  { title: 'Unit 3 Time', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'What time do you get up?', cn: '你几点起床？' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'What time do you get up?', cn: '你几点起床？' },
      { speaker: 'Pit', text: 'I get up at half past six.', cn: '我六点半起床。' },
      { speaker: 'Pat', text: 'School starts at eight o\'clock.', cn: '学校八点开始。' },
      { speaker: 'Sandy', text: 'I do my homework at five.', cn: '我五点做作业。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'I do my homework at five.', cn: '我五点做作业。' },
    ]},
  ]},
  { title: 'Unit 4 What do you collect?', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'I collect stamps.', cn: '我集邮。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'I collect stamps.', cn: '我集邮。' },
      { speaker: 'Toby', text: 'I\'ve got stamps from ten countries.', cn: '我有十个国家的邮票。' },
      { speaker: 'Sandy', text: 'I collect postcards.', cn: '我收集明信片。' },
      { speaker: 'Pit', text: 'My brother collects comic books.', cn: '我哥哥收集漫画书。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'My brother collects comic books.', cn: '我哥哥收集漫画书。' },
    ]},
  ]},
  { title: 'Unit 5 Animals in danger', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'Pandas are in danger.', cn: '熊猫濒危了。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'Pandas are in danger.', cn: '熊猫濒危了。' },
      { speaker: 'Pit', text: 'There are only about two thousand pandas.', cn: '大约只有两千只熊猫了。' },
      { speaker: 'Pat', text: 'We should protect them.', cn: '我们应该保护它们。' },
      { speaker: 'Sandy', text: 'Many animals need our help.', cn: '很多动物需要我们的帮助。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'Many animals need our help.', cn: '很多动物需要我们的帮助。' },
    ]},
  ]},
  { title: 'Unit 6 School life', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'My favourite subject is English.', cn: '我最喜欢的科目是英语。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'My favourite subject is English.', cn: '我最喜欢的科目是英语。' },
      { speaker: 'Toby', text: 'I like Science. We do experiments.', cn: '我喜欢科学。我们做实验。' },
      { speaker: 'Sandy', text: 'We have Art on Thursday.', cn: '周四有美术课。' },
      { speaker: 'Pit', text: 'Our school lunch is nice.', cn: '我们的学校午餐很好。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'Our school lunch is nice.', cn: '我们的学校午餐很好。' },
    ]},
  ]},
  ]},
  // ========== 五年级下册 ==========
  { title: '五年级下册', units: [
  { title: 'Unit 1 A party', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'We\'re going to have a party.', cn: '我们要开一个派对。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'We\'re going to have a party.', cn: '我们要开一个派对。' },
      { speaker: 'Pit', text: 'I\'m going to bring some snacks.', cn: '我要带一些零食。' },
      { speaker: 'Pat', text: 'I\'ll bring some balloons.', cn: '我会带一些气球。' },
      { speaker: 'Sandy', text: 'Let\'s decorate the room.', cn: '我们来装饰房间吧。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'Let\'s decorate the room.', cn: '我们来装饰房间吧。' },
    ]},
  ]},
  { title: 'Unit 2 Food and health', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'You should eat more vegetables.', cn: '你应该多吃蔬菜。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'You should eat more vegetables.', cn: '你应该多吃蔬菜。' },
      { speaker: 'Toby', text: 'I like fruit. It\'s healthy.', cn: '我喜欢水果。很健康。' },
      { speaker: 'Sandy', text: 'Don\'t eat too much fast food.', cn: '不要吃太多快餐。' },
      { speaker: 'Pit', text: 'Drink lots of water every day.', cn: '每天多喝水。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'Drink lots of water every day.', cn: '每天多喝水。' },
    ]},
  ]},
  { title: 'Unit 3 Television', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'What\'s your favourite TV programme?', cn: '你最喜欢的电视节目是什么？' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'What\'s your favourite TV programme?', cn: '你最喜欢的电视节目是什么？' },
      { speaker: 'Pit', text: 'I like cartoons. They\'re funny.', cn: '我喜欢动画片。很有趣。' },
      { speaker: 'Pat', text: 'I like nature programmes.', cn: '我喜欢自然节目。' },
      { speaker: 'Sandy', text: 'I watch TV for one hour every day.', cn: '我每天看一小时电视。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'I watch TV for one hour every day.', cn: '我每天看一小时电视。' },
    ]},
  ]},
  { title: 'Unit 4 In the city', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'Beijing is a big city.', cn: '北京是一个大城市。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'Beijing is a big city.', cn: '北京是一个大城市。' },
      { speaker: 'Toby', text: 'There are many tall buildings.', cn: '有很多高楼。' },
      { speaker: 'Sandy', text: 'We can visit the museum.', cn: '我们可以参观博物馆。' },
      { speaker: 'Pit', text: 'The underground is very fast.', cn: '地铁很快。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'The underground is very fast.', cn: '地铁很快。' },
    ]},
  ]},
  { title: 'Unit 5 The world around us', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'The Earth is our home.', cn: '地球是我们的家。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'The Earth is our home.', cn: '地球是我们的家。' },
      { speaker: 'Pit', text: 'We should keep it clean.', cn: '我们应该保持它干净。' },
      { speaker: 'Pat', text: 'Don\'t throw rubbish everywhere.', cn: '不要到处扔垃圾。' },
      { speaker: 'Sandy', text: 'Let\'s plant more trees.', cn: '让我们种更多的树。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'Let\'s plant more trees.', cn: '让我们种更多的树。' },
    ]},
  ]},
  { title: 'Unit 6 Adventures', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'I went camping last weekend.', cn: '上周末我去露营了。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'I went camping last weekend.', cn: '上周末我去露营了。' },
      { speaker: 'Toby', text: 'We put up a tent and made a fire.', cn: '我们搭了帐篷、生了火。' },
      { speaker: 'Sandy', text: 'We saw many stars at night.', cn: '晚上我们看到了很多星星。' },
      { speaker: 'Pit', text: 'It was a great adventure!', cn: '真是一次很棒的冒险！' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'It was a great adventure!', cn: '真是一次很棒的冒险！' },
    ]},
  ]},
  ]},
  // ========== 六年级上册 ==========
  { title: '六年级上册', units: [
  { title: 'Unit 1 School is great fun!', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'I love my school. We learn many things.', cn: '我爱我的学校。我们学很多东西。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'I love my school. We learn many things.', cn: '我爱我的学校。我们学很多东西。' },
      { speaker: 'Pit', text: 'My favourite subject is Maths.', cn: '我最喜欢的科目是数学。' },
      { speaker: 'Pat', text: 'We have a big library.', cn: '我们有一个大图书馆。' },
      { speaker: 'Sandy', text: 'School is really great fun!', cn: '学校真的很有趣！' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'School is really great fun!', cn: '学校真的很有趣！' },
    ]},
  ]},
  { title: 'Unit 2 Big cities', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'London is the capital of the UK.', cn: '伦敦是英国的首都。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'London is the capital of the UK.', cn: '伦敦是英国的首都。' },
      { speaker: 'Toby', text: 'There are lots of famous places.', cn: '有很多著名的地方。' },
      { speaker: 'Sandy', text: 'Big Ben and the London Eye are very popular.', cn: '大本钟和伦敦眼很受欢迎。' },
      { speaker: 'Pit', text: 'I want to visit London one day.', cn: '我想有一天去伦敦。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'I want to visit London one day.', cn: '我想有一天去伦敦。' },
    ]},
  ]},
  { title: 'Unit 3 Festivals', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'The Mid-Autumn Festival is in autumn.', cn: '中秋节在秋天。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'The Mid-Autumn Festival is in autumn.', cn: '中秋节在秋天。' },
      { speaker: 'Pit', text: 'We eat mooncakes and watch the moon.', cn: '我们吃月饼、赏月。' },
      { speaker: 'Pat', text: 'Christmas is in winter.', cn: '圣诞节在冬天。' },
      { speaker: 'Sandy', text: 'We put up a Christmas tree and give presents.', cn: '我们竖起圣诞树、送礼物。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'We put up a Christmas tree and give presents.', cn: '我们竖起圣诞树、送礼物。' },
    ]},
  ]},
  { title: 'Unit 4 Accidents', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'What happened to your arm?', cn: '你的胳膊怎么了？' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'What happened to your arm?', cn: '你的胳膊怎么了？' },
      { speaker: 'Toby', text: 'I fell off my bike yesterday.', cn: '我昨天从自行车上摔下来了。' },
      { speaker: 'Sandy', text: 'Did you hurt yourself?', cn: '你伤到自己了吗？' },
      { speaker: 'Pit', text: 'Be careful next time!', cn: '下次小心点！' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'Be careful next time!', cn: '下次小心点！' },
    ]},
  ]},
  { title: 'Unit 5 Animals and us', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'Dogs are our good friends.', cn: '狗是我们的好朋友。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'Dogs are our good friends.', cn: '狗是我们的好朋友。' },
      { speaker: 'Pit', text: 'They can help blind people.', cn: '它们可以帮助盲人。' },
      { speaker: 'Pat', text: 'Cats are good pets too.', cn: '猫也是好的宠物。' },
      { speaker: 'Sandy', text: 'We should be kind to animals.', cn: '我们应该善待动物。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'We should be kind to animals.', cn: '我们应该善待动物。' },
    ]},
  ]},
  { title: 'Unit 6 My hero', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'Who is your hero?', cn: '谁是你的英雄？' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'Who is your hero?', cn: '谁是你的英雄？' },
      { speaker: 'Toby', text: 'My hero is my father. He works very hard.', cn: '我的英雄是我爸爸。他工作很努力。' },
      { speaker: 'Sandy', text: 'I like scientists. They change the world.', cn: '我喜欢科学家。他们改变世界。' },
      { speaker: 'Pit', text: 'Heroes make the world better.', cn: '英雄让世界更美好。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'Heroes make the world better.', cn: '英雄让世界更美好。' },
    ]},
  ]},
  ]},
  // ========== 六年级下册 ==========
  { title: '六年级下册', units: [
  { title: 'Unit 1 My cousins and I', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'My cousin lives in Australia.', cn: '我表弟住在澳大利亚。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'My cousin lives in Australia.', cn: '我表弟住在澳大利亚。' },
      { speaker: 'Pit', text: 'She can speak English very well.', cn: '她英语说得很好。' },
      { speaker: 'Pat', text: 'We write emails to each other.', cn: '我们互相写邮件。' },
      { speaker: 'Sandy', text: 'I miss her very much.', cn: '我很想念她。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'I miss her very much.', cn: '我很想念她。' },
    ]},
  ]},
  { title: 'Unit 2 Food and drinks', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'What would you like to eat?', cn: '你想吃什么？' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'What would you like to eat?', cn: '你想吃什么？' },
      { speaker: 'Toby', text: 'I\'d like some noodles.', cn: '我想要一些面条。' },
      { speaker: 'Sandy', text: 'I\'ll have rice and chicken.', cn: '我要米饭和鸡肉。' },
      { speaker: 'Pit', text: 'And a glass of juice, please.', cn: '再来一杯果汁，谢谢。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'And a glass of juice, please.', cn: '再来一杯果汁，谢谢。' },
    ]},
  ]},
  { title: 'Unit 3 Dreams', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'I had a dream last night.', cn: '昨晚我做了一个梦。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'I had a dream last night.', cn: '昨晚我做了一个梦。' },
      { speaker: 'Pit', text: 'I dreamed I could fly!', cn: '我梦见我能飞！' },
      { speaker: 'Pat', text: 'I often dream about animals.', cn: '我经常梦到动物。' },
      { speaker: 'Sandy', text: 'Dreams are very interesting.', cn: '梦很有趣。' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'Dreams are very interesting.', cn: '梦很有趣。' },
    ]},
  ]},
  { title: 'Unit 4 My heroes', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'I want to be a teacher like Miss Brown.', cn: '我想成为像Brown老师那样的老师。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'I want to be a teacher like Miss Brown.', cn: '我想成为像Brown老师那样的老师。' },
      { speaker: 'Toby', text: 'I want to help people like a doctor.', cn: '我想像医生那样帮助别人。' },
      { speaker: 'Sandy', text: 'We should follow our dreams.', cn: '我们应该追随梦想。' },
      { speaker: 'Pit', text: 'Never give up!', cn: '永不放弃！' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'Never give up!', cn: '永不放弃！' },
    ]},
  ]},
  { title: 'Unit 5 I love reading', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Toby', text: 'I love reading books.', cn: '我喜欢读书。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Toby', text: 'I love reading books.', cn: '我喜欢读书。' },
      { speaker: 'Pit', text: 'My favourite book is about space.', cn: '我最喜欢的书是关于太空的。' },
      { speaker: 'Pat', text: 'Reading makes us smart.', cn: '阅读让我们变聪明。' },
      { speaker: 'Sandy', text: 'Let\'s read more books!', cn: '让我们多读书吧！' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: '', text: 'Mime the action and say.', cn: '做动作，说一说。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Sandy', text: 'Let\'s read more books!', cn: '让我们多读书吧！' },
    ]},
  ]},
  { title: 'Unit 6 Goodbye', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Pat', text: 'Goodbye, my friends.', cn: '再见了，我的朋友们。' },
    ]},
    { type: 'talk', title: 'Listen and say', dialogues: [
      { speaker: 'Pat', text: 'Goodbye, my friends.', cn: '再见了，我的朋友们。' },
      { speaker: 'Toby', text: 'We had a wonderful time together.', cn: '我们在一起度过了美好的时光。' },
      { speaker: 'Sandy', text: 'I will write to you.', cn: '我会给你写信的。' },
      { speaker: 'Pit', text: 'Good luck in middle school!', cn: '中学好运！' },
    ]},
    { type: 'learn', title: 'Mime and say', dialogues: [
      { speaker: 'All', text: 'We will never forget our school days.', cn: '我们永远不会忘记我们的校园时光。' },
    ]},
    { type: 'activity', title: 'Let\'s play', dialogues: [
      { speaker: 'Pit', text: 'Good luck in middle school!', cn: '中学好运！' },
      { speaker: 'All', text: 'We will never forget our school days.', cn: '我们永远不会忘记我们的校园时光。' },
    ]},
  ]},
  ]},
];
