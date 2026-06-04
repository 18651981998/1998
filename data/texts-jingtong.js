// data/texts-jingtong.js — 人教精通版 1-6年级课文对话
const jingtongTexts = [
  // ========== 一年级上册 ==========
  { title: '一年级上册', units: [
  { title: 'Unit 1 Hello', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'Hello! I\'m Yang Ming.', cn: '你好！我是杨明。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'Hello! I\'m Yang Ming.', cn: '你好！我是杨明。' },
      { speaker: 'Li Yan', text: 'Hi! I\'m Li Yan.', cn: '嗨！我是李燕。' },
      { speaker: 'Gao Wei', text: 'Hello, I\'m Gao Wei. What\'s your name?', cn: '你好，我是高伟。你叫什么名字？' },
      { speaker: 'Peter', text: 'My name is Peter.', cn: '我叫Peter。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Peter', text: 'My name is Peter.', cn: '我叫Peter。' },
    ]},
  ]},
  { title: 'Unit 2 Good morning', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Teacher', text: 'Good morning, boys and girls!', cn: '早上好，孩子们！' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Teacher', text: 'Good morning, boys and girls!', cn: '早上好，孩子们！' },
      { speaker: 'Class', text: 'Good morning!', cn: '早上好！' },
      { speaker: 'Li Yan', text: 'Good afternoon, Miss Liu.', cn: '下午好，刘老师。' },
      { speaker: 'Miss Liu', text: 'Good afternoon, Li Yan.', cn: '下午好，李燕。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Miss Liu', text: 'Good afternoon, Li Yan.', cn: '下午好，李燕。' },
    ]},
  ]},
  { title: 'Unit 3 How are you?', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'How are you?', cn: '你好吗？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'How are you?', cn: '你好吗？' },
      { speaker: 'Yang Ming', text: 'I\'m fine. Thank you.', cn: '我很好。谢谢。' },
      { speaker: 'Peter', text: 'How are you, Li Yan?', cn: '你好吗，李燕？' },
      { speaker: 'Li Yan', text: 'Good! And you?', cn: '很好！你呢？' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Li Yan', text: 'Good! And you?', cn: '很好！你呢？' },
    ]},
  ]},
  { title: 'Unit 4 Numbers', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'How many?', cn: '多少？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'How many?', cn: '多少？' },
      { speaker: 'Li Yan', text: 'One, two, three, four, five!', cn: '一、二、三、四、五！' },
      { speaker: 'Peter', text: 'Let\'s count together!', cn: '一起数吧！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 5 Animals', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'Look! A cat!', cn: '看！一只猫！' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'Look! A cat!', cn: '看！一只猫！' },
      { speaker: 'Li Yan', text: 'I like dogs. They\'re cute.', cn: '我喜欢狗。很可爱。' },
      { speaker: 'Yang Ming', text: 'What\'s that?', cn: '那是什么？' },
      { speaker: 'Peter', text: 'It\'s a bird!', cn: '是一只鸟！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Peter', text: 'It\'s a bird!', cn: '是一只鸟！' },
    ]},
  ]},
  { title: 'Unit 6 Colours', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Li Yan', text: 'What colour is it?', cn: '什么颜色？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Li Yan', text: 'What colour is it?', cn: '什么颜色？' },
      { speaker: 'Yang Ming', text: 'Red.', cn: '红色。' },
      { speaker: 'Peter', text: 'I like blue.', cn: '我喜欢蓝色。' },
      { speaker: 'Gao Wei', text: 'My bag is green.', cn: '我的书包是绿色的。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Gao Wei', text: 'My bag is green.', cn: '我的书包是绿色的。' },
    ]},
  ]},
  ]},
  // ========== 一年级下册 ==========
  { title: '一年级下册', units: [
  { title: 'Unit 1 Classroom', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Teacher', text: 'Point to the blackboard.', cn: '指向黑板。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Teacher', text: 'Point to the blackboard.', cn: '指向黑板。' },
      { speaker: 'Li Yan', text: 'This is my desk.', cn: '这是我的书桌。' },
      { speaker: 'Yang Ming', text: 'What\'s this?', cn: '这是什么？' },
      { speaker: 'Peter', text: 'It\'s a chair.', cn: '是一把椅子。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Peter', text: 'It\'s a chair.', cn: '是一把椅子。' },
    ]},
  ]},
  { title: 'Unit 2 My family', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'This is my mother.', cn: '这是我妈妈。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'This is my mother.', cn: '这是我妈妈。' },
      { speaker: 'Li Yan', text: 'This is my father.', cn: '这是我爸爸。' },
      { speaker: 'Peter', text: 'I love my family.', cn: '我爱我的家。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 3 Food and drink', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'I like noodles.', cn: '我喜欢面条。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'I like noodles.', cn: '我喜欢面条。' },
      { speaker: 'Li Yan', text: 'I like rice.', cn: '我喜欢米饭。' },
      { speaker: 'Peter', text: 'Can I have some water?', cn: '能喝点水吗？' },
      { speaker: 'Gao Wei', text: 'Here you are.', cn: '给你。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Gao Wei', text: 'Here you are.', cn: '给你。' },
    ]},
  ]},
  { title: 'Unit 4 Toys', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Li Yan', text: 'I have a doll.', cn: '我有一个娃娃。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Li Yan', text: 'I have a doll.', cn: '我有一个娃娃。' },
      { speaker: 'Yang Ming', text: 'I have a kite.', cn: '我有一个风筝。' },
      { speaker: 'Peter', text: 'Let\'s play together!', cn: '我们一起玩吧！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 5 My body', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'Touch your head.', cn: '摸你的头。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'Touch your head.', cn: '摸你的头。' },
      { speaker: 'Li Yan', text: 'This is my mouth.', cn: '这是我的嘴。' },
      { speaker: 'Yang Ming', text: 'These are my hands.', cn: '这是我的双手。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 6 Clothes', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Peter', text: 'I have a new T-shirt.', cn: '我有一件新T恤。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Peter', text: 'I have a new T-shirt.', cn: '我有一件新T恤。' },
      { speaker: 'Li Yan', text: 'I like your cap.', cn: '我喜欢你的帽子。' },
      { speaker: 'Yang Ming', text: 'Put on your shoes.', cn: '穿上鞋子。' },
      { speaker: 'Gao Wei', text: 'Let\'s go out!', cn: '我们出去吧！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Gao Wei', text: 'Let\'s go out!', cn: '我们出去吧！' },
    ]},
  ]},
  ]},
  // ========== 二年级上册 ==========
  { title: '二年级上册', units: [
  { title: 'Unit 1 My school', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'Welcome to our school!', cn: '欢迎来我们学校！' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'Welcome to our school!', cn: '欢迎来我们学校！' },
      { speaker: 'Peter', text: 'It\'s very big and clean.', cn: '又大又干净。' },
      { speaker: 'Li Yan', text: 'This is our library.', cn: '这是我们的图书馆。' },
      { speaker: 'Gao Wei', text: 'We like reading here.', cn: '我们喜欢在这里读书。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Gao Wei', text: 'We like reading here.', cn: '我们喜欢在这里读书。' },
    ]},
  ]},
  { title: 'Unit 2 Subjects', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'We have Chinese, Maths and English.', cn: '我们有语文、数学和英语。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'We have Chinese, Maths and English.', cn: '我们有语文、数学和英语。' },
      { speaker: 'Peter', text: 'I like English best.', cn: '我最喜欢英语。' },
      { speaker: 'Li Yan', text: 'Art is my favourite subject.', cn: '美术是我最喜欢的科目。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 3 Time', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'What time is it?', cn: '几点了？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'What time is it?', cn: '几点了？' },
      { speaker: 'Li Yan', text: 'It\'s eight o\'clock. Time for class.', cn: '八点。上课时间。' },
      { speaker: 'Peter', text: 'I\'m not late today!', cn: '我今天没迟到！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 4 Days of the week', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'What day is it today?', cn: '今天星期几？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'What day is it today?', cn: '今天星期几？' },
      { speaker: 'Li Yan', text: 'It\'s Monday. We have English.', cn: '星期一。有英语课。' },
      { speaker: 'Peter', text: 'I like Friday. Weekend is coming!', cn: '我喜欢星期五。周末要来了！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 5 Weather', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'What\'s the weather like?', cn: '天气怎么样？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'What\'s the weather like?', cn: '天气怎么样？' },
      { speaker: 'Li Yan', text: 'It\'s sunny and warm.', cn: '晴天暖和。' },
      { speaker: 'Peter', text: 'Let\'s fly kites!', cn: '我们放风筝吧！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 6 Seasons', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'I like spring best. Flowers bloom.', cn: '我最喜欢春天。花开了。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'I like spring best. Flowers bloom.', cn: '我最喜欢春天。花开了。' },
      { speaker: 'Li Yan', text: 'Summer is hot. I go swimming.', cn: '夏天热。我去游泳。' },
      { speaker: 'Yang Ming', text: 'I like winter. I can make snowmen.', cn: '我喜欢冬天。能堆雪人。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  ]},
  // ========== 二年级下册 ==========
  { title: '二年级下册', units: [
  { title: 'Unit 1 Animals', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Peter', text: 'Let\'s go to the zoo!', cn: '我们去动物园吧！' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Peter', text: 'Let\'s go to the zoo!', cn: '我们去动物园吧！' },
      { speaker: 'Li Yan', text: 'Look at the pandas! They\'re lovely.', cn: '看熊猫！好可爱。' },
      { speaker: 'Yang Ming', text: 'The monkeys are funny.', cn: '猴子很有趣。' },
      { speaker: 'Gao Wei', text: 'I like the elephants.', cn: '我喜欢大象。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Gao Wei', text: 'I like the elephants.', cn: '我喜欢大象。' },
    ]},
  ]},
  { title: 'Unit 2 Clothes', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Li Yan', text: 'I need a new dress for the party.', cn: '派对需要新裙子。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Li Yan', text: 'I need a new dress for the party.', cn: '派对需要新裙子。' },
      { speaker: 'Peter', text: 'I have a new jacket. It\'s blue.', cn: '我有新夹克。蓝色的。' },
      { speaker: 'Gao Wei', text: 'This shirt is too small.', cn: '这件衬衫太小了。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 3 My home', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'Welcome to my home!', cn: '欢迎来我家！' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'Welcome to my home!', cn: '欢迎来我家！' },
      { speaker: 'Li Yan', text: 'This is the living room.', cn: '这是客厅。' },
      { speaker: 'Peter', text: 'Where is your bedroom?', cn: '你的卧室在哪里？' },
      { speaker: 'Yang Ming', text: 'It\'s on the second floor.', cn: '在二楼。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Yang Ming', text: 'It\'s on the second floor.', cn: '在二楼。' },
    ]},
  ]},
  { title: 'Unit 4 Activities', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'What are you doing?', cn: '你在做什么？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'What are you doing?', cn: '你在做什么？' },
      { speaker: 'Li Yan', text: 'I\'m drawing a picture.', cn: '我在画画。' },
      { speaker: 'Peter', text: 'I\'m reading a storybook.', cn: '我在看故事书。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 5 Food', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'What would you like to eat?', cn: '你想吃什么？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'What would you like to eat?', cn: '你想吃什么？' },
      { speaker: 'Peter', text: 'I\'d like some chicken and rice.', cn: '我想要鸡肉饭。' },
      { speaker: 'Li Yan', text: 'I\'d like noodles with vegetables.', cn: '我想要蔬菜面。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 6 Holidays', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'Happy Children\'s Day!', cn: '儿童节快乐！' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'Happy Children\'s Day!', cn: '儿童节快乐！' },
      { speaker: 'Li Yan', text: 'Let\'s sing and dance!', cn: '我们唱歌跳舞吧！' },
      { speaker: 'Peter', text: 'I got a present from my parents.', cn: '爸妈给了我礼物。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  ]},
  // ========== 三年级上册 ==========
  { title: '三年级上册', units: [
  { title: 'Unit 1 Hello! I\'m Monkey', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Monkey', text: 'Hello! I\'m Monkey. Nice to meet you.', cn: '你好！我是Monkey。很高兴认识你。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Monkey', text: 'Hello! I\'m Monkey. Nice to meet you.', cn: '你好！我是Monkey。很高兴认识你。' },
      { speaker: 'Rabbit', text: 'Hello, Monkey. I\'m Rabbit.', cn: '你好，Monkey。我是兔子。' },
      { speaker: 'Cat', text: 'Good morning, friends!', cn: '早上好，朋友们！' },
      { speaker: 'Dog', text: 'Good morning! I\'m Dog.', cn: '早上好！我是狗。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Dog', text: 'Good morning! I\'m Dog.', cn: '早上好！我是狗。' },
    ]},
  ]},
  { title: 'Unit 2 This is my pencil', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'This is my pencil-box.', cn: '这是我的铅笔盒。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'This is my pencil-box.', cn: '这是我的铅笔盒。' },
      { speaker: 'Li Yan', text: 'What\'s in it?', cn: '里面有什么？' },
      { speaker: 'Yang Ming', text: 'A ruler, a pen and an eraser.', cn: '一把尺子、一支钢笔、一块橡皮。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 3 Look at my nose', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Peter', text: 'Look at my nose. It\'s big!', cn: '看我的鼻子。好大！' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Peter', text: 'Look at my nose. It\'s big!', cn: '看我的鼻子。好大！' },
      { speaker: 'Gao Wei', text: 'Look at my ears. They\'re small.', cn: '看我的耳朵。很小。' },
      { speaker: 'Li Yan', text: 'My eyes are big.', cn: '我的眼睛很大。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 4 I have a ball', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'I have a new ball.', cn: '我有一个新球。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'I have a new ball.', cn: '我有一个新球。' },
      { speaker: 'Peter', text: 'Can I play with it?', cn: '我能玩吗？' },
      { speaker: 'Yang Ming', text: 'Sure! Let\'s play together.', cn: '当然！我们一起玩。' },
      { speaker: 'Li Yan', text: 'Let\'s go to the playground!', cn: '我们去操场吧！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Li Yan', text: 'Let\'s go to the playground!', cn: '我们去操场吧！' },
    ]},
  ]},
  { title: 'Unit 5 What colour is it?', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'What colour is your schoolbag?', cn: '你的书包什么颜色？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'What colour is your schoolbag?', cn: '你的书包什么颜色？' },
      { speaker: 'Li Yan', text: 'It\'s pink. I like pink.', cn: '粉色。我喜欢粉色。' },
      { speaker: 'Yang Ming', text: 'My schoolbag is blue and white.', cn: '我的书包是蓝白相间的。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 6 I like hamburgers', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Peter', text: 'I like hamburgers!', cn: '我喜欢汉堡！' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Peter', text: 'I like hamburgers!', cn: '我喜欢汉堡！' },
      { speaker: 'Li Yan', text: 'I like hot dogs.', cn: '我喜欢热狗。' },
      { speaker: 'Gao Wei', text: 'Do you like Coke?', cn: '你喜欢可乐吗？' },
      { speaker: 'Yang Ming', text: 'Yes, I do. It\'s yummy!', cn: '是的。很好喝！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Yang Ming', text: 'Yes, I do. It\'s yummy!', cn: '是的。很好喝！' },
    ]},
  ]},
  ]},
  // ========== 三年级下册 ==========
  { title: '三年级下册', units: [
  { title: 'Unit 1 Let\'s go to school', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'Let\'s go to school!', cn: '我们上学吧！' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'Let\'s go to school!', cn: '我们上学吧！' },
      { speaker: 'Li Yan', text: 'OK. What\'s in your bag?', cn: '好的。书包里有什么？' },
      { speaker: 'Yang Ming', text: 'I have a Chinese book, a Maths book and an English book.', cn: '有语文书、数学书和英语书。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 2 I\'m in Class One, Grade Three', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Peter', text: 'Which class are you in?', cn: '你在哪个班？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Peter', text: 'Which class are you in?', cn: '你在哪个班？' },
      { speaker: 'Gao Wei', text: 'I\'m in Class One, Grade Three.', cn: '我在三年级一班。' },
      { speaker: 'Li Yan', text: 'We are in the same class!', cn: '我们在同一个班！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 3 This is my father', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'This is my father. He\'s a teacher.', cn: '这是我爸爸。他是老师。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'This is my father. He\'s a teacher.', cn: '这是我爸爸。他是老师。' },
      { speaker: 'Peter', text: 'This is my mother. She\'s a doctor.', cn: '这是我妈妈。她是医生。' },
      { speaker: 'Li Yan', text: 'I love my family.', cn: '我爱我的家。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 4 Do you like candy?', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'Do you like candy?', cn: '你喜欢糖果吗？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'Do you like candy?', cn: '你喜欢糖果吗？' },
      { speaker: 'Li Yan', text: 'Yes, I like it very much.', cn: '是的，非常喜欢。' },
      { speaker: 'Yang Ming', text: 'Don\'t eat too much candy!', cn: '不要吃太多糖！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 5 It\'s a parrot', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Peter', text: 'What\'s that?', cn: '那是什么？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Peter', text: 'What\'s that?', cn: '那是什么？' },
      { speaker: 'Yang Ming', text: 'It\'s a parrot. It can talk!', cn: '是一只鹦鹉。它会说话！' },
      { speaker: 'Li Yan', text: 'Hello, parrot!', cn: '你好，鹦鹉！' },
      { speaker: 'Parrot', text: 'Hello! Hello!', cn: '你好！你好！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Parrot', text: 'Hello! Hello!', cn: '你好！你好！' },
    ]},
  ]},
  { title: 'Unit 6 Is this your skirt?', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Li Yan', text: 'Is this your skirt?', cn: '这是你的裙子吗？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Li Yan', text: 'Is this your skirt?', cn: '这是你的裙子吗？' },
      { speaker: 'Gao Wei', text: 'No, it isn\'t. It\'s my sister\'s.', cn: '不是。是我妹妹的。' },
      { speaker: 'Yang Ming', text: 'Whose cap is this?', cn: '这是谁的帽子？' },
      { speaker: 'Peter', text: 'It\'s mine!', cn: '是我的！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Peter', text: 'It\'s mine!', cn: '是我的！' },
    ]},
  ]},
  ]},
  // ========== 四年级上册 ==========
  { title: '四年级上册', units: [
  { title: 'Unit 1 This is my new friend', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'This is my new friend, Jim.', cn: '这是我的新朋友，Jim。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'This is my new friend, Jim.', cn: '这是我的新朋友，Jim。' },
      { speaker: 'Peter', text: 'Nice to meet you, Jim. Where are you from?', cn: '很高兴见到你，Jim。你来自哪里？' },
      { speaker: 'Jim', text: 'I\'m from America.', cn: '我来自美国。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 2 What\'s your number?', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'What\'s your number?', cn: '你的学号是多少？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'What\'s your number?', cn: '你的学号是多少？' },
      { speaker: 'Li Yan', text: 'I\'m number fourteen.', cn: '我是14号。' },
      { speaker: 'Peter', text: 'Let\'s count from thirteen to twenty!', cn: '从13数到20吧！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 3 It\'s a pineapple', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'What\'s this in English?', cn: '这个用英语怎么说？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'What\'s this in English?', cn: '这个用英语怎么说？' },
      { speaker: 'Li Yan', text: 'It\'s a pineapple.', cn: '是菠萝。' },
      { speaker: 'Peter', text: 'What\'s that? Is it a cucumber?', cn: '那是什么？是黄瓜吗？' },
      { speaker: 'Gao Wei', text: 'Yes. We eat it every day.', cn: '是的。我们每天吃。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Gao Wei', text: 'Yes. We eat it every day.', cn: '是的。我们每天吃。' },
    ]},
  ]},
  { title: 'Unit 4 How\'s the weather today?', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Li Yan', text: 'How\'s the weather today?', cn: '今天天气怎么样？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Li Yan', text: 'How\'s the weather today?', cn: '今天天气怎么样？' },
      { speaker: 'Yang Ming', text: 'It\'s sunny. Let\'s play football.', cn: '晴天。我们踢足球吧。' },
      { speaker: 'Peter', text: 'Wait, it\'s going to rain!', cn: '等等，要下雨了！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 5 I like those shoes', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'I like those shoes. Can I try them on?', cn: '我喜欢那双鞋。能试试吗？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'I like those shoes. Can I try them on?', cn: '我喜欢那双鞋。能试试吗？' },
      { speaker: 'Shopkeeper', text: 'Sure. What size?', cn: '当然。多大码？' },
      { speaker: 'Gao Wei', text: 'Size 36, please.', cn: '36码，谢谢。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 6 I\'m tall', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Peter', text: 'I\'m tall. Look at my long legs.', cn: '我很高。看我的长腿。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Peter', text: 'I\'m tall. Look at my long legs.', cn: '我很高。看我的长腿。' },
      { speaker: 'Li Yan', text: 'I have a big mouth and small ears.', cn: '我有一个大嘴巴和小耳朵。' },
      { speaker: 'Yang Ming', text: 'You look funny, Li Yan!', cn: '你看起来很有趣，李燕！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  ]},
  // ========== 四年级下册 ==========
  { title: '四年级下册', units: [
  { title: 'Unit 1 Welcome to my new home', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'Welcome to my new home!', cn: '欢迎来我的新家！' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'Welcome to my new home!', cn: '欢迎来我的新家！' },
      { speaker: 'Li Yan', text: 'It\'s beautiful. There\'s a big TV in the living room.', cn: '真漂亮。客厅有一台大电视。' },
      { speaker: 'Peter', text: 'I like the study. There are many books.', cn: '我喜欢书房。有很多书。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 2 There are forty students in our class', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'How many students are there in your class?', cn: '你们班有多少学生？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'How many students are there in your class?', cn: '你们班有多少学生？' },
      { speaker: 'Yang Ming', text: 'There are forty students. Twenty-two boys and eighteen girls.', cn: '有40个学生。22个男生，18个女生。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 3 What subject do you like best?', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Li Yan', text: 'What subject do you like best?', cn: '你最喜欢什么科目？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Li Yan', text: 'What subject do you like best?', cn: '你最喜欢什么科目？' },
      { speaker: 'Peter', text: 'I like PE best. We run and play games.', cn: '我最喜欢体育。我们跑步玩游戏。' },
      { speaker: 'Yang Ming', text: 'I like Science. It\'s interesting.', cn: '我喜欢科学。很有趣。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 4 What will you do this weekend?', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'What will you do this weekend?', cn: '周末你要做什么？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'What will you do this weekend?', cn: '周末你要做什么？' },
      { speaker: 'Li Yan', text: 'I\'ll go to the park with my family.', cn: '和家里人一起去公园。' },
      { speaker: 'Peter', text: 'I\'ll have a picnic with my friends.', cn: '和朋友野餐。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 5 What will you do on Sunday?', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'I\'ll go swimming on Sunday.', cn: '周日我去游泳。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'I\'ll go swimming on Sunday.', cn: '周日我去游泳。' },
      { speaker: 'Li Yan', text: 'I\'ll go shopping with my mum.', cn: '和妈妈去购物。' },
      { speaker: 'Peter', text: 'I\'ll read a storybook at home.', cn: '我在家看故事书。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 6 Would you like to take a trip?', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'Would you like to take a trip?', cn: '你想去旅行吗？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'Would you like to take a trip?', cn: '你想去旅行吗？' },
      { speaker: 'Li Yan', text: 'Yes! Where shall we go?', cn: '想！我们去哪里？' },
      { speaker: 'Yang Ming', text: 'Let\'s go to the Great Wall.', cn: '我们去长城吧。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  ]},
  // ========== 五年级上册 ==========
  { title: '五年级上册', units: [
  { title: 'Unit 1 We have new friends', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'We have two new friends in our class.', cn: '我们班来了两个新朋友。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'We have two new friends in our class.', cn: '我们班来了两个新朋友。' },
      { speaker: 'Li Yan', text: 'They are from England.', cn: '他们来自英国。' },
      { speaker: 'Peter', text: 'Let\'s welcome them!', cn: '我们来欢迎他们吧！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 2 She looks cute', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'Look at that girl. She looks cute.', cn: '看那个女孩。她看起来可爱。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'Look at that girl. She looks cute.', cn: '看那个女孩。她看起来可爱。' },
      { speaker: 'Li Yan', text: 'She has big eyes and long hair.', cn: '她有大眼睛和长头发。' },
      { speaker: 'Peter', text: 'She\'s very clever, too.', cn: '她也很聪明。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 3 My father is a writer', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'What does your father do?', cn: '你爸爸做什么？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'What does your father do?', cn: '你爸爸做什么？' },
      { speaker: 'Li Yan', text: 'He\'s a writer. He writes stories for children.', cn: '他是作家。为孩子们写故事。' },
      { speaker: 'Peter', text: 'My mother is a singer.', cn: '我妈妈是歌手。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 4 Where do you work?', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'Where does your father work?', cn: '你爸爸在哪里工作？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'Where does your father work?', cn: '你爸爸在哪里工作？' },
      { speaker: 'Yang Ming', text: 'He works in a hospital. He\'s a doctor.', cn: '在医院。他是医生。' },
      { speaker: 'Peter', text: 'My aunt works in a school.', cn: '我姑姑在学校工作。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 5 Is this your schoolbag?', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Li Yan', text: 'Is this your schoolbag?', cn: '这是你的书包吗？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Li Yan', text: 'Is this your schoolbag?', cn: '这是你的书包吗？' },
      { speaker: 'Peter', text: 'No. My schoolbag is blue.', cn: '不是。我的书包是蓝色的。' },
      { speaker: 'Gao Wei', text: 'Whose umbrella is this?', cn: '这是谁的伞？' },
      { speaker: 'Yang Ming', text: 'It\'s mine. Thank you!', cn: '是我的。谢谢！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Yang Ming', text: 'It\'s mine. Thank you!', cn: '是我的。谢谢！' },
    ]},
  ]},
  { title: 'Unit 6 It\'s a grapefruit', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'What\'s this? Is it an orange?', cn: '这是什么？是橙子吗？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'What\'s this? Is it an orange?', cn: '这是什么？是橙子吗？' },
      { speaker: 'Li Yan', text: 'No, it\'s a grapefruit.', cn: '不，是柚子。' },
      { speaker: 'Peter', text: 'Would you like some?', cn: '来点吗？' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  ]},
  // ========== 五年级下册 ==========
  { title: '五年级下册', units: [
  { title: 'Unit 1 Welcome to our school', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'Welcome to our school! This is the library.', cn: '欢迎来我们学校！这是图书馆。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'Welcome to our school! This is the library.', cn: '欢迎来我们学校！这是图书馆。' },
      { speaker: 'Visitor', text: 'It\'s very big. Do you often come here?', cn: '很大。你们常来吗？' },
      { speaker: 'Li Yan', text: 'Yes, we borrow books every week.', cn: '是的，我们每周借书。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 2 Can I help you?', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Shopkeeper', text: 'Can I help you?', cn: '需要帮忙吗？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Shopkeeper', text: 'Can I help you?', cn: '需要帮忙吗？' },
      { speaker: 'Peter', text: 'I want a toy train.', cn: '我想要一个玩具火车。' },
      { speaker: 'Shopkeeper', text: 'How about this one?', cn: '这个怎么样？' },
      { speaker: 'Peter', text: 'It looks great! How much is it?', cn: '看起来很棒！多少钱？' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Peter', text: 'It looks great! How much is it?', cn: '看起来很棒！多少钱？' },
    ]},
  ]},
  { title: 'Unit 3 We should obey the rules', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'We should obey the school rules.', cn: '我们应该遵守校规。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'We should obey the school rules.', cn: '我们应该遵守校规。' },
      { speaker: 'Li Yan', text: 'Listen to the teacher carefully.', cn: '认真听老师讲课。' },
      { speaker: 'Yang Ming', text: 'Don\'t be late for school.', cn: '不要上学迟到。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 4 What\'s wrong with you?', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Doctor', text: 'What\'s wrong with you?', cn: '你怎么了？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Doctor', text: 'What\'s wrong with you?', cn: '你怎么了？' },
      { speaker: 'Peter', text: 'I have a headache and a fever.', cn: '我头疼发烧。' },
      { speaker: 'Doctor', text: 'Let me have a look. Take this medicine.', cn: '让我看看。吃这个药。' },
      { speaker: 'Peter', text: 'Thank you, Doctor.', cn: '谢谢医生。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Peter', text: 'Thank you, Doctor.', cn: '谢谢医生。' },
    ]},
  ]},
  { title: 'Unit 5 I\'m cleaning my room', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mum', text: 'What are you doing?', cn: '你在做什么？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Mum', text: 'What are you doing?', cn: '你在做什么？' },
      { speaker: 'Li Yan', text: 'I\'m cleaning my room.', cn: '在打扫房间。' },
      { speaker: 'Mum', text: 'Good girl! Dad is washing the car.', cn: '好孩子！爸爸在洗车。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 6 We\'re watching the games', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'Look! The boys are playing football.', cn: '看！男孩们在踢足球。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'Look! The boys are playing football.', cn: '看！男孩们在踢足球。' },
      { speaker: 'Li Yan', text: 'The girls are playing volleyball.', cn: '女孩们在打排球。' },
      { speaker: 'Peter', text: 'We\'re watching the games.', cn: '我们在看比赛。' },
      { speaker: 'Gao Wei', text: 'Sports Day is so much fun!', cn: '运动会太有趣了！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Gao Wei', text: 'Sports Day is so much fun!', cn: '运动会太有趣了！' },
    ]},
  ]},
  ]},
  // ========== 六年级上册 ==========
  { title: '六年级上册', units: [
  { title: 'Unit 1 I go to school at 8:00', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Li Yan', text: 'I go to school at 8:00 every day.', cn: '我每天八点上学。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Li Yan', text: 'I go to school at 8:00 every day.', cn: '我每天八点上学。' },
      { speaker: 'Peter', text: 'I have breakfast at 7:30.', cn: '我七点半吃早餐。' },
      { speaker: 'Yang Ming', text: 'I do my homework at 5:00.', cn: '我五点做作业。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 2 What\'s your hobby?', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'What\'s your hobby?', cn: '你的爱好是什么？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'What\'s your hobby?', cn: '你的爱好是什么？' },
      { speaker: 'Li Yan', text: 'I like collecting stamps. It\'s interesting.', cn: '集邮。很有趣。' },
      { speaker: 'Peter', text: 'My hobby is playing basketball.', cn: '我的爱好是打篮球。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 3 Would you like to come to my birthday party?', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'Would you like to come to my birthday party?', cn: '你愿意来我的生日派对吗？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'Would you like to come to my birthday party?', cn: '你愿意来我的生日派对吗？' },
      { speaker: 'Li Yan', text: 'I\'d love to. When is it?', cn: '我很乐意。什么时候？' },
      { speaker: 'Yang Ming', text: 'This Saturday at 2:00.', cn: '这周六下午两点。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 4 January is the first month', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Peter', text: 'January is the first month of the year.', cn: '一月是一年的第一个月。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Peter', text: 'January is the first month of the year.', cn: '一月是一年的第一个月。' },
      { speaker: 'Li Yan', text: 'February is the second month. Spring Festival is often in February.', cn: '二月是第二个月。春节常在二月。' },
      { speaker: 'Gao Wei', text: 'I like June. Children\'s Day is in June.', cn: '我喜欢六月。儿童节在六月。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 5 July is the seventh month', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'July is the seventh month. Summer holiday begins.', cn: '七月是第七个月。暑假开始了。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'July is the seventh month. Summer holiday begins.', cn: '七月是第七个月。暑假开始了。' },
      { speaker: 'Li Yan', text: 'August is hot. We go swimming.', cn: '八月很热。我们去游泳。' },
      { speaker: 'Peter', text: 'September is back to school.', cn: '九月开学了。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 6 There are four seasons in a year', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'There are four seasons in a year.', cn: '一年有四季。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'There are four seasons in a year.', cn: '一年有四季。' },
      { speaker: 'Li Yan', text: 'Spring is the first season. It\'s green.', cn: '春天是第一季。绿意盎然。' },
      { speaker: 'Yang Ming', text: 'Autumn is the third season. It\'s golden.', cn: '秋天是第三季。金黄灿烂。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  ]},
  // ========== 六年级下册 ==========
  { title: '六年级下册', units: [
  { title: 'Unit 1 How was your holiday?', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'How was your holiday?', cn: '假期怎么样？' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'How was your holiday?', cn: '假期怎么样？' },
      { speaker: 'Li Yan', text: 'It was wonderful. I went to Beijing.', cn: '太棒了。我去了北京。' },
      { speaker: 'Peter', text: 'I stayed at home and read many books.', cn: '我待在家读了很多书。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 2 Let\'s talk about the past', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'I was short three years ago. Now I\'m tall.', cn: '三年前我很矮。现在很高。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'I was short three years ago. Now I\'m tall.', cn: '三年前我很矮。现在很高。' },
      { speaker: 'Li Yan', text: 'There were no computers in our classroom before.', cn: '以前我们教室没电脑。' },
      { speaker: 'Yang Ming', text: 'Things change a lot!', cn: '变化真大！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 3 We are going to travel', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Peter', text: 'We are going to travel this summer.', cn: '今年夏天我们要去旅行。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Peter', text: 'We are going to travel this summer.', cn: '今年夏天我们要去旅行。' },
      { speaker: 'Li Yan', text: 'Where are you going?', cn: '去哪里？' },
      { speaker: 'Peter', text: 'We\'re going to visit Shanghai.', cn: '去上海。' },
      { speaker: 'Gao Wei', text: 'Have a good time!', cn: '玩得开心！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Gao Wei', text: 'Have a good time!', cn: '玩得开心！' },
    ]},
  ]},
  { title: 'Unit 4 General Revision 1', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ming', text: 'We learned a lot this term.', cn: '这学期我们学了很多。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Yang Ming', text: 'We learned a lot this term.', cn: '这学期我们学了很多。' },
      { speaker: 'Li Yan', text: 'We talked about holidays and past events.', cn: '我们谈了假期和过去的事。' },
      { speaker: 'Peter', text: 'English is so useful!', cn: '英语真有用！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 5 General Revision 2', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Gao Wei', text: 'Let\'s review what we learned in primary school.', cn: '我们回顾小学学了什么。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Gao Wei', text: 'Let\'s review what we learned in primary school.', cn: '我们回顾小学学了什么。' },
      { speaker: 'Li Yan', text: 'From ABC to long stories. Amazing!', cn: '从字母到长篇故事。太棒了！' },
      { speaker: 'Yang Ming', text: 'Our teachers helped us grow.', cn: '老师们帮助我们成长。' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: '', text: 'Let\'s chant together!', cn: '一起说唱！' },
    ]},
  ]},
  { title: 'Unit 6 Our school life', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Peter', text: 'We had so many happy days at school.', cn: '我们在学校有很多快乐的日子。' },
    ]},
    { type: 'talk', title: 'Fun story', dialogues: [
      { speaker: 'Peter', text: 'We had so many happy days at school.', cn: '我们在学校有很多快乐的日子。' },
      { speaker: 'Li Yan', text: 'I will miss our teachers and friends.', cn: '我会想念老师和朋友。' },
      { speaker: 'Yang Ming', text: 'Goodbye, primary school!', cn: '再见，小学！' },
      { speaker: 'Gao Wei', text: 'A new journey begins!', cn: '新的旅程开始！' },
    ]},
    { type: 'learn', title: 'Let\\\'s check', dialogues: [
      { speaker: '', text: 'Check and review.', cn: '检查复习。' },
    ]},
    { type: 'activity', title: 'Let\\\'s chant', dialogues: [
      { speaker: 'Gao Wei', text: 'A new journey begins!', cn: '新的旅程开始！' },
    ]},
  ]},
  ]},
];
