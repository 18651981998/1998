// data/texts-yilin.js — 译林版（牛津）3-6年级课文对话
const yilinTexts = [
  // ========== 三年级上册 ==========
  { title: '三年级上册', units: [
  { title: 'Unit 1 Hello!', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mike', text: 'Hello!', cn: '你好！' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mike', text: 'Hello!', cn: '你好！' },
      { speaker: 'Yang Ling', text: 'Hi!', cn: '嗨！' },
      { speaker: 'Su Hai', text: 'Good morning, Miss Li.', cn: '早上好，李老师。' },
      { speaker: 'Miss Li', text: 'Good morning, class.', cn: '早上好，同学们。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: 'Mike', text: 'Hello, I\'m Mike.', cn: '你好，我是Mike。' },
      { speaker: 'Sam', text: 'Hi, Bobby!', cn: '嗨，Bobby！' },
      { speaker: 'Bobby', text: 'Hi!', cn: '嗨！' },
      { speaker: 'Sam', text: 'Goodbye!', cn: '再见！' },
      { speaker: 'Bobby', text: 'Goodbye!', cn: '再见！' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Miss Li', text: 'Good morning, class.', cn: '早上好，同学们。' },
      { speaker: 'Mike', text: 'Hello, I\'m Mike.', cn: '你好，我是Mike。' },
    ]},
  ]},
  { title: 'Unit 2 I\'m Liu Tao', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Liu Tao', text: 'Hi, Mike.', cn: '嗨，Mike。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Liu Tao', text: 'Hi, Mike.', cn: '嗨，Mike。' },
      { speaker: 'Mike', text: 'Hi. Are you Su Hai?', cn: '嗨。你是Su Hai吗？' },
      { speaker: 'Liu Tao', text: 'No, I\'m not. I\'m Liu Tao.', cn: '不，我不是。我是刘涛。' },
      { speaker: 'Mike', text: 'Good morning, Liu Tao.', cn: '早上好，刘涛。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Mike', text: 'Good morning, Liu Tao.', cn: '早上好，刘涛。' },
    ]},
  ]},
  { title: 'Unit 3 My friends', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ling', text: 'Goodbye, Miss Li.', cn: '再见，李老师。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Yang Ling', text: 'Goodbye, Miss Li.', cn: '再见，李老师。' },
      { speaker: 'Miss Li', text: 'Goodbye, Yang Ling.', cn: '再见，杨玲。' },
      { speaker: 'Mike', text: 'She\'s my friend.', cn: '她是我的朋友。' },
      { speaker: 'Su Hai', text: 'He\'s my friend too.', cn: '他也是我的朋友。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Su Hai', text: 'He\'s my friend too.', cn: '他也是我的朋友。' },
    ]},
  ]},
  { title: 'Unit 4 My family', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mike', text: 'This is my father.', cn: '这是我的爸爸。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mike', text: 'This is my father.', cn: '这是我的爸爸。' },
      { speaker: 'Liu Tao', text: 'This is my mother.', cn: '这是我的妈妈。' },
      { speaker: 'Su Hai', text: 'This is my brother, Tim.', cn: '这是我弟弟，Tim。' },
      { speaker: 'Helen', text: 'This is me!', cn: '这是我！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Helen', text: 'This is me!', cn: '这是我！' },
    ]},
  ]},
  { title: 'Unit 5 Look at me!', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ling', text: 'Look at my T-shirt.', cn: '看我的T恤。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Yang Ling', text: 'Look at my T-shirt.', cn: '看我的T恤。' },
      { speaker: 'Su Hai', text: 'It\'s nice!', cn: '很好看！' },
      { speaker: 'Mike', text: 'Look at my cap.', cn: '看我的帽子。' },
      { speaker: 'Liu Tao', text: 'It\'s great!', cn: '太棒了！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Liu Tao', text: 'It\'s great!', cn: '太棒了！' },
    ]},
  ]},
  { title: 'Unit 6 Colours', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ling', text: 'What colour is my skirt?', cn: '我的裙子是什么颜色？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Yang Ling', text: 'What colour is my skirt?', cn: '我的裙子是什么颜色？' },
      { speaker: 'Su Hai', text: 'It\'s orange.', cn: '橙色。' },
      { speaker: 'Yang Ling', text: 'What colour is it now?', cn: '它现在是什么颜色？' },
      { speaker: 'Su Hai', text: 'It\'s green.', cn: '绿色。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: 'Yang Ling', text: 'What colour is it now?', cn: '现在是什么颜色？' },
      { speaker: 'Su Hai', text: 'It\'s red and yellow.', cn: '红色和黄色。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Su Hai', text: 'It\'s green.', cn: '绿色。' },
      { speaker: 'Yang Ling', text: 'What colour is it now?', cn: '现在是什么颜色？' },
    ]},
  ]},
  { title: 'Unit 7 Would you like a pie?', page: 'P62-71', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Su Hai', text: 'Would you like a pie?', cn: '你想吃一个派吗？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Su Hai', text: 'Would you like a pie?', cn: '你想吃一个派吗？' },
      { speaker: 'Yang Ling', text: 'No, thank you.', cn: '不用了，谢谢。' },
      { speaker: 'Su Hai', text: 'What about a cake?', cn: '来一个蛋糕怎么样？' },
      { speaker: 'Yang Ling', text: 'Yes, please.', cn: '好的，谢谢。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Yang Ling', text: 'Yes, please.', cn: '好的，谢谢。' },
    ]},
  ]},
  { title: 'Unit 8 Happy New Year!', page: 'P72-81', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Uncle John', text: 'Happy New Year!', cn: '新年快乐！' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Uncle John', text: 'Happy New Year!', cn: '新年快乐！' },
      { speaker: 'Mike', text: 'Happy New Year, Uncle John!', cn: '新年快乐，John叔叔！' },
      { speaker: 'Uncle John', text: 'This is for you, Helen.', cn: '这是给你的，Helen。' },
      { speaker: 'Helen', text: 'Thank you, Uncle John!', cn: '谢谢，John叔叔！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Helen', text: 'Thank you, Uncle John!', cn: '谢谢，John叔叔！' },
    ]},
  ]},
  ]},
  // ========== 三年级下册 ==========
  { title: '三年级下册', units: [
  { title: 'Unit 1 In class', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mr Green', text: 'Stand up.', cn: '起立。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mr Green', text: 'Stand up.', cn: '起立。' },
      { speaker: 'Mr Green', text: 'Good morning, class.', cn: '早上好，同学们。' },
      { speaker: 'Class', text: 'Good morning, Mr Green.', cn: '早上好，Green老师。' },
      { speaker: 'Mr Green', text: 'Sit down, please.', cn: '请坐下。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Mr Green', text: 'Sit down, please.', cn: '请坐下。' },
    ]},
  ]},
  { title: 'Unit 2 In the library', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Liu Tao', text: 'Shh! Don\'t shout!', cn: '嘘！不要大声喊！' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Liu Tao', text: 'Shh! Don\'t shout!', cn: '嘘！不要大声喊！' },
      { speaker: 'Yang Ling', text: 'Don\'t run!', cn: '不要跑！' },
      { speaker: 'Mike', text: 'Don\'t eat here!', cn: '不要在这里吃！' },
      { speaker: 'Su Hai', text: 'Don\'t sleep!', cn: '不要睡觉！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Su Hai', text: 'Don\'t sleep!', cn: '不要睡觉！' },
    ]},
  ]},
  { title: 'Unit 3 Is this your pencil?', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mike', text: 'Is this your pencil?', cn: '这是你的铅笔吗？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mike', text: 'Is this your pencil?', cn: '这是你的铅笔吗？' },
      { speaker: 'Liu Tao', text: 'No, it isn\'t.', cn: '不，不是。' },
      { speaker: 'Mike', text: 'Is that your ruler?', cn: '那是你的尺子吗？' },
      { speaker: 'Yang Ling', text: 'Yes, it is. Thank you!', cn: '是的。谢谢！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Yang Ling', text: 'Yes, it is. Thank you!', cn: '是的。谢谢！' },
    ]},
  ]},
  { title: 'Unit 4 Where\'s the bird?', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mike', text: 'Where\'s the bird?', cn: '鸟在哪里？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mike', text: 'Where\'s the bird?', cn: '鸟在哪里？' },
      { speaker: 'Su Hai', text: 'It\'s under the desk.', cn: '在书桌下面。' },
      { speaker: 'Liu Tao', text: 'Now it\'s behind the door.', cn: '现在在门后面。' },
      { speaker: 'Yang Ling', text: 'It\'s in the tree now!', cn: '现在在树上了！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Yang Ling', text: 'It\'s in the tree now!', cn: '现在在树上了！' },
    ]},
  ]},
  { title: 'Unit 5 How old are you?', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Staff', text: 'Welcome to Toy Museum! How old are you?', cn: '欢迎来到玩具博物馆！你几岁了？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Staff', text: 'Welcome to Toy Museum! How old are you?', cn: '欢迎来到玩具博物馆！你几岁了？' },
      { speaker: 'Mike', text: 'I\'m nine.', cn: '我九岁。' },
      { speaker: 'Helen', text: 'I\'m eight.', cn: '我八岁。' },
      { speaker: 'Tim', text: 'I\'m two.', cn: '我两岁。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Tim', text: 'I\'m two.', cn: '我两岁。' },
    ]},
  ]},
  { title: 'Unit 6 What time is it?', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mum', text: 'Wake up, Taotao.', cn: '醒醒，涛涛。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mum', text: 'Wake up, Taotao.', cn: '醒醒，涛涛。' },
      { speaker: 'Liu Tao', text: 'What time is it?', cn: '几点了？' },
      { speaker: 'Mum', text: 'It\'s seven o\'clock.', cn: '七点了。' },
      { speaker: 'Liu Tao', text: 'Oh, I\'m late!', cn: '哦，我迟到了！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Liu Tao', text: 'Oh, I\'m late!', cn: '哦，我迟到了！' },
    ]},
  ]},
  { title: 'Unit 7 On the farm', page: 'P62-71', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Grandpa', text: 'Welcome to my farm.', cn: '欢迎来到我的农场。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Grandpa', text: 'Welcome to my farm.', cn: '欢迎来到我的农场。' },
      { speaker: 'Mike', text: 'What are these?', cn: '这些是什么？' },
      { speaker: 'Grandpa', text: 'They\'re pigs.', cn: '是猪。' },
      { speaker: 'Liu Tao', text: 'What are those?', cn: '那些是什么？' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: 'Grandpa', text: 'They\'re cows.', cn: '是奶牛。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Liu Tao', text: 'What are those?', cn: '那些是什么？' },
      { speaker: 'Grandpa', text: 'They\'re cows.', cn: '是奶牛。' },
    ]},
  ]},
  { title: 'Unit 8 We\'re twins!', page: 'P72-81', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mike', text: 'Who\'s that girl?', cn: '那个女孩是谁？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mike', text: 'Who\'s that girl?', cn: '那个女孩是谁？' },
      { speaker: 'Su Hai', text: 'She\'s Su Yang. She\'s my sister.', cn: '她是苏洋。我妹妹。' },
      { speaker: 'Mike', text: 'You look the same!', cn: '你们看起来一样！' },
      { speaker: 'Su Hai', text: 'Yes, we\'re twins!', cn: '是的，我们是双胞胎！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Su Hai', text: 'Yes, we\'re twins!', cn: '是的，我们是双胞胎！' },
    ]},
  ]},
  ]},
  // ========== 四年级上册 ==========
  { title: '四年级上册', units: [
  { title: 'Unit 1 I like dogs', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Su Hai', text: 'Look at this cat! I like cats.', cn: '看这只猫！我喜欢猫。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Su Hai', text: 'Look at this cat! I like cats.', cn: '看这只猫！我喜欢猫。' },
      { speaker: 'Yang Ling', text: 'I like dogs. They\'re cute.', cn: '我喜欢狗。它们很可爱。' },
      { speaker: 'Mike', text: 'Do you like dogs, Liu Tao?', cn: '刘涛，你喜欢狗吗？' },
      { speaker: 'Liu Tao', text: 'No, I don\'t. I like pandas.', cn: '不。我喜欢熊猫。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Liu Tao', text: 'No, I don\'t. I like pandas.', cn: '不。我喜欢熊猫。' },
    ]},
  ]},
  { title: 'Unit 2 Let\'s make a fruit salad', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Liu Tao', text: 'I have a pineapple.', cn: '我有一个菠萝。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Liu Tao', text: 'I have a pineapple.', cn: '我有一个菠萝。' },
      { speaker: 'Mike', text: 'I have a mango and an orange.', cn: '我有一个芒果和一个橙子。' },
      { speaker: 'Su Hai', text: 'Do you have any bananas?', cn: '你有香蕉吗？' },
      { speaker: 'Yang Ling', text: 'Yes, I do. Let\'s make a fruit salad!', cn: '有的。我们做水果沙拉吧！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Yang Ling', text: 'Yes, I do. Let\'s make a fruit salad!', cn: '有的。我们做水果沙拉吧！' },
    ]},
  ]},
  { title: 'Unit 3 How many?', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mike', text: 'How many toy cars do you have?', cn: '你有多少玩具车？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mike', text: 'How many toy cars do you have?', cn: '你有多少玩具车？' },
      { speaker: 'Liu Tao', text: 'I have thirteen.', cn: '我有十三辆。' },
      { speaker: 'Yang Ling', text: 'How many stickers do you have?', cn: '你有多少贴纸？' },
      { speaker: 'Su Hai', text: 'I have fifteen. Can I have one?', cn: '我有十五张。能给我一张吗？' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Su Hai', text: 'I have fifteen. Can I have one?', cn: '我有十五张。能给我一张吗？' },
    ]},
  ]},
  { title: 'Unit 4 I can play basketball', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Liu Tao', text: 'Can you play basketball?', cn: '你会打篮球吗？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Liu Tao', text: 'Can you play basketball?', cn: '你会打篮球吗？' },
      { speaker: 'Wang Bing', text: 'Yes, I can.', cn: '是的，我会。' },
      { speaker: 'Mike', text: 'Can you swim?', cn: '你会游泳吗？' },
      { speaker: 'Liu Tao', text: 'No, I can\'t. But I can try.', cn: '不，我不会。但我可以试试。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Liu Tao', text: 'No, I can\'t. But I can try.', cn: '不，我不会。但我可以试试。' },
    ]},
  ]},
  { title: 'Unit 5 Our new home', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mum', text: 'Where\'s my bag?', cn: '我的包在哪里？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mum', text: 'Where\'s my bag?', cn: '我的包在哪里？' },
      { speaker: 'Su Hai', text: 'It\'s in your bedroom.', cn: '在你卧室里。' },
      { speaker: 'Mum', text: 'Where are my skirts?', cn: '我的裙子在哪里？' },
      { speaker: 'Su Yang', text: 'They\'re in the living room, on the sofa.', cn: '在客厅，沙发上。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Su Yang', text: 'They\'re in the living room, on the sofa.', cn: '在客厅，沙发上。' },
    ]},
  ]},
  { title: 'Unit 6 At the snack bar', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mike', text: 'I\'d like a hamburger and a glass of milk.', cn: '我想要一个汉堡和一杯牛奶。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mike', text: 'I\'d like a hamburger and a glass of milk.', cn: '我想要一个汉堡和一杯牛奶。' },
      { speaker: 'Dad', text: 'What would you like, Helen?', cn: 'Helen，你想要什么？' },
      { speaker: 'Helen', text: 'I\'d like some noodles.', cn: '我想要一些面条。' },
      { speaker: 'Dad', text: 'Anything else?', cn: '还要别的吗？' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Dad', text: 'Anything else?', cn: '还要别的吗？' },
    ]},
  ]},
  { title: 'Unit 7 How much?', page: 'P62-71', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Su Hai', text: 'How much is this fan?', cn: '这把扇子多少钱？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Su Hai', text: 'How much is this fan?', cn: '这把扇子多少钱？' },
      { speaker: 'Seller', text: 'It\'s five yuan.', cn: '五元。' },
      { speaker: 'Yang Ling', text: 'How much are these socks?', cn: '这双袜子多少钱？' },
      { speaker: 'Seller', text: 'They\'re four yuan.', cn: '四元。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Seller', text: 'They\'re four yuan.', cn: '四元。' },
    ]},
  ]},
  { title: 'Unit 8 Dolls', page: 'P72-81', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Su Hai', text: 'Her hair is long.', cn: '她的头发很长。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Su Hai', text: 'Her hair is long.', cn: '她的头发很长。' },
      { speaker: 'Yang Ling', text: 'Her eyes are big.', cn: '她的眼睛很大。' },
      { speaker: 'Liu Tao', text: 'His nose is small.', cn: '他的鼻子很小。' },
      { speaker: 'Wang Bing', text: 'His mouth is big.', cn: '他的嘴很大。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Wang Bing', text: 'His mouth is big.', cn: '他的嘴很大。' },
    ]},
  ]},
  ]},
  // ========== 四年级下册 ==========
  { title: '四年级下册', units: [
  { title: 'Unit 1 Our school subjects', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Wang Bing', text: 'Welcome back to school, class.', cn: '欢迎回校，同学们。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Wang Bing', text: 'Welcome back to school, class.', cn: '欢迎回校，同学们。' },
      { speaker: 'Su Hai', text: 'We have English, Maths and Chinese.', cn: '我们有英语、数学和语文。' },
      { speaker: 'Mike', text: 'What subjects do you like?', cn: '你喜欢什么科目？' },
      { speaker: 'Yang Ling', text: 'I like Art and Music.', cn: '我喜欢美术和音乐。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Yang Ling', text: 'I like Art and Music.', cn: '我喜欢美术和音乐。' },
    ]},
  ]},
  { title: 'Unit 2 After school', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Liu Tao', text: 'What day is it today?', cn: '今天星期几？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Liu Tao', text: 'What day is it today?', cn: '今天星期几？' },
      { speaker: 'Mike', text: 'It\'s Wednesday.', cn: '星期三。' },
      { speaker: 'Liu Tao', text: 'We have a football match on Saturday.', cn: '我们周六有足球赛。' },
      { speaker: 'Su Hai', text: 'Good luck!', cn: '祝好运！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Su Hai', text: 'Good luck!', cn: '祝好运！' },
    ]},
  ]},
  { title: 'Unit 3 My day', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mike', text: 'I get up at seven.', cn: '我七点起床。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mike', text: 'I get up at seven.', cn: '我七点起床。' },
      { speaker: 'Liu Tao', text: 'I go to school at seven forty.', cn: '我七点四十上学。' },
      { speaker: 'Su Hai', text: 'I have lunch at twelve.', cn: '我十二点吃午饭。' },
      { speaker: 'Yang Ling', text: 'I go to bed at nine.', cn: '我九点睡觉。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Yang Ling', text: 'I go to bed at nine.', cn: '我九点睡觉。' },
    ]},
  ]},
  { title: 'Unit 4 Drawing in the park', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mike', text: 'What can you see in the park?', cn: '你在公园能看到什么？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mike', text: 'What can you see in the park?', cn: '你在公园能看到什么？' },
      { speaker: 'Liu Tao', text: 'I can see a tree and some flowers.', cn: '我能看到一棵树和一些花。' },
      { speaker: 'Wang Bing', text: 'Can you draw them?', cn: '你能画它们吗？' },
      { speaker: 'Liu Tao', text: 'It\'s easy!', cn: '很简单！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Liu Tao', text: 'It\'s easy!', cn: '很简单！' },
    ]},
  ]},
  { title: 'Unit 5 Seasons', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Su Hai', text: 'In spring, it is warm. We fly kites.', cn: '春天暖和。我们放风筝。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Su Hai', text: 'In spring, it is warm. We fly kites.', cn: '春天暖和。我们放风筝。' },
      { speaker: 'Mike', text: 'In summer, it is hot. We go swimming.', cn: '夏天热。我们去游泳。' },
      { speaker: 'Yang Ling', text: 'In autumn, it is cool. We have picnics.', cn: '秋天凉爽。我们去野餐。' },
      { speaker: 'Liu Tao', text: 'In winter, it is cold. We make snowmen.', cn: '冬天冷。我们堆雪人。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Liu Tao', text: 'In winter, it is cold. We make snowmen.', cn: '冬天冷。我们堆雪人。' },
    ]},
  ]},
  { title: 'Unit 6 Whose dress is this?', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Su Hai', text: 'Whose dress is this?', cn: '这是谁的裙子？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Su Hai', text: 'Whose dress is this?', cn: '这是谁的裙子？' },
      { speaker: 'Helen', text: 'It\'s my cousin\'s.', cn: '是我表姐的。' },
      { speaker: 'Su Yang', text: 'Whose gloves are these?', cn: '这是谁的手套？' },
      { speaker: 'Mike', text: 'They\'re so big!', cn: '好大啊！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Mike', text: 'They\'re so big!', cn: '好大啊！' },
    ]},
  ]},
  { title: 'Unit 7 What\'s the matter?', page: 'P62-71', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mum', text: 'What\'s the matter, Taotao?', cn: '怎么了，涛涛？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mum', text: 'What\'s the matter, Taotao?', cn: '怎么了，涛涛？' },
      { speaker: 'Liu Tao', text: 'I\'m thirsty.', cn: '我渴了。' },
      { speaker: 'Mum', text: 'Here\'s some water.', cn: '这里有一些水。' },
      { speaker: 'Liu Tao', text: 'Thank you, Mum.', cn: '谢谢，妈妈。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Liu Tao', text: 'Thank you, Mum.', cn: '谢谢，妈妈。' },
    ]},
  ]},
  { title: 'Unit 8 How are you?', page: 'P72-81', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ling', text: 'Hello, this is Yang Ling speaking.', cn: '你好，我是杨玲。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Yang Ling', text: 'Hello, this is Yang Ling speaking.', cn: '你好，我是杨玲。' },
      { speaker: 'Miss Li', text: 'Hello, Yang Ling. This is Miss Li.', cn: '你好，杨玲。我是李老师。' },
      { speaker: 'Yang Ling', text: 'I can\'t come to school today. I have a cold.', cn: '我今天不能去学校。我感冒了。' },
      { speaker: 'Miss Li', text: 'Take care, Yang Ling.', cn: '保重，杨玲。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Miss Li', text: 'Take care, Yang Ling.', cn: '保重，杨玲。' },
    ]},
  ]},
  ]},
  // ========== 五年级上册 ==========
  { title: '五年级上册', units: [
  { title: 'Unit 1 Goldilocks and the three bears', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Goldilocks', text: 'This soup is too cold.', cn: '这碗汤太凉了。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Goldilocks', text: 'This soup is too cold.', cn: '这碗汤太凉了。' },
      { speaker: 'Goldilocks', text: 'This soup is too hot.', cn: '这碗汤太烫了。' },
      { speaker: 'Goldilocks', text: 'This soup is just right.', cn: '这碗汤刚刚好。' },
      { speaker: 'Baby Bear', text: 'There\'s someone in the house!', cn: '房子里有人！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Baby Bear', text: 'There\'s someone in the house!', cn: '房子里有人！' },
    ]},
  ]},
  { title: 'Unit 2 A new student', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ling', text: 'Welcome to our school!', cn: '欢迎来到我们学校！' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Yang Ling', text: 'Welcome to our school!', cn: '欢迎来到我们学校！' },
      { speaker: 'Nancy', text: 'Thank you. Is there a library?', cn: '谢谢。有图书馆吗？' },
      { speaker: 'Yang Ling', text: 'Yes, there are three computer rooms too.', cn: '有，还有三间电脑室。' },
      { speaker: 'Nancy', text: 'Wow, your school is great!', cn: '哇，你们学校真棒！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Nancy', text: 'Wow, your school is great!', cn: '哇，你们学校真棒！' },
    ]},
  ]},
  { title: 'Unit 3 Our animal friends', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Nancy', text: 'I have a rabbit. It has red eyes.', cn: '我有一只兔子。它有红眼睛。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Nancy', text: 'I have a rabbit. It has red eyes.', cn: '我有一只兔子。它有红眼睛。' },
      { speaker: 'Mike', text: 'I have a dog. It can run and jump.', cn: '我有一只狗。它能跑能跳。' },
      { speaker: 'Liu Tao', text: 'I have a parrot. It can talk.', cn: '我有一只鹦鹉。它会说话。' },
      { speaker: 'Su Hai', text: 'Animals are our friends.', cn: '动物是我们的朋友。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Su Hai', text: 'Animals are our friends.', cn: '动物是我们的朋友。' },
    ]},
  ]},
  { title: 'Unit 4 Hobbies', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mike', text: 'I like playing basketball and football.', cn: '我喜欢打篮球和踢足球。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mike', text: 'I like playing basketball and football.', cn: '我喜欢打篮球和踢足球。' },
      { speaker: 'Liu Tao', text: 'I like drawing.', cn: '我喜欢画画。' },
      { speaker: 'Yang Ling', text: 'I like reading stories.', cn: '我喜欢读故事。' },
      { speaker: 'Su Hai', text: 'I like watching films.', cn: '我喜欢看电影。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Su Hai', text: 'I like watching films.', cn: '我喜欢看电影。' },
    ]},
  ]},
  { title: 'Unit 5 What do they do?', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Su Hai', text: 'What does your father do?', cn: '你爸爸做什么工作？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Su Hai', text: 'What does your father do?', cn: '你爸爸做什么工作？' },
      { speaker: 'Mike', text: 'He\'s a teacher. He teaches English.', cn: '他是老师。他教英语。' },
      { speaker: 'Su Hai', text: 'What does your mother do?', cn: '你妈妈做什么？' },
      { speaker: 'Mike', text: 'She\'s a writer. She writes stories.', cn: '她是作家。她写故事。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Mike', text: 'She\'s a writer. She writes stories.', cn: '她是作家。她写故事。' },
    ]},
  ]},
  { title: 'Unit 6 My e-friend', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Wang Bing', text: 'I have an e-friend. His name is Peter.', cn: '我有一个网友。他叫Peter。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Wang Bing', text: 'I have an e-friend. His name is Peter.', cn: '我有一个网友。他叫Peter。' },
      { speaker: 'Liu Tao', text: 'Where does he live?', cn: '他住在哪里？' },
      { speaker: 'Wang Bing', text: 'He lives in the UK.', cn: '他住在英国。' },
      { speaker: 'Liu Tao', text: 'What subjects does he like?', cn: '他喜欢什么科目？' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Liu Tao', text: 'What subjects does he like?', cn: '他喜欢什么科目？' },
    ]},
  ]},
  { title: 'Unit 7 At weekends', page: 'P62-71', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Su Hai', text: 'What do you do at weekends?', cn: '你周末做什么？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Su Hai', text: 'What do you do at weekends?', cn: '你周末做什么？' },
      { speaker: 'Mike', text: 'I usually play football with Liu Tao.', cn: '我通常和刘涛踢足球。' },
      { speaker: 'Helen', text: 'I often have dancing lessons.', cn: '我经常上舞蹈课。' },
      { speaker: 'Su Yang', text: 'Sometimes we visit our grandparents.', cn: '有时我们看望爷爷奶奶。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Su Yang', text: 'Sometimes we visit our grandparents.', cn: '有时我们看望爷爷奶奶。' },
    ]},
  ]},
  { title: 'Unit 8 At Christmas', page: 'P72-81', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mike', text: 'First, we buy presents for our family.', cn: '首先，我们给家人买礼物。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mike', text: 'First, we buy presents for our family.', cn: '首先，我们给家人买礼物。' },
      { speaker: 'Tim', text: 'We put a stocking on the bed.', cn: '我们把一只长筒袜放在床上。' },
      { speaker: 'Helen', text: 'Then, Christmas Eve comes.', cn: '然后，平安夜来了。' },
      { speaker: 'Dad', text: 'Merry Christmas!', cn: '圣诞快乐！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Dad', text: 'Merry Christmas!', cn: '圣诞快乐！' },
    ]},
  ]},
  ]},
  // ========== 五年级下册 ==========
  { title: '五年级下册', units: [
  { title: 'Unit 1 Cinderella', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Fairy', text: 'Cinderella, come and help me!', cn: '灰姑娘，过来帮我！' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Fairy', text: 'Cinderella, come and help me!', cn: '灰姑娘，过来帮我！' },
      { speaker: 'Cinderella', text: 'Why can\'t I go to the party?', cn: '我为什么不能去舞会？' },
      { speaker: 'Fairy', text: 'You can go now. But come back before 12 o\'clock.', cn: '你现在可以去了。但要在十二点前回来。' },
      { speaker: 'Prince', text: 'I love you!', cn: '我爱你！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Prince', text: 'I love you!', cn: '我爱你！' },
    ]},
  ]},
  { title: 'Unit 2 How do you come to school?', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ling', text: 'How do you come to school?', cn: '你怎么来学校的？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Yang Ling', text: 'How do you come to school?', cn: '你怎么来学校的？' },
      { speaker: 'Su Hai', text: 'I come to school by bus.', cn: '我坐公交来学校。' },
      { speaker: 'Mike', text: 'I come by metro.', cn: '我坐地铁来。' },
      { speaker: 'Liu Tao', text: 'I live near school. I walk.', cn: '我住学校附近。我走路。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Liu Tao', text: 'I live near school. I walk.', cn: '我住学校附近。我走路。' },
    ]},
  ]},
  { title: 'Unit 3 Asking the way', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ling', text: 'Excuse me, how do I get to the cinema?', cn: '打扰一下，去电影院怎么走？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Yang Ling', text: 'Excuse me, how do I get to the cinema?', cn: '打扰一下，去电影院怎么走？' },
      { speaker: 'Policeman', text: 'Go along this street. Turn right at the traffic lights.', cn: '沿这条街走。在红绿灯右转。' },
      { speaker: 'Yang Ling', text: 'Is it far?', cn: '远吗？' },
      { speaker: 'Policeman', text: 'No, about five minutes\' walk.', cn: '不远，大约走五分钟。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Policeman', text: 'No, about five minutes\' walk.', cn: '不远，大约走五分钟。' },
    ]},
  ]},
  { title: 'Unit 4 Seeing the doctor', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Doctor', text: 'What\'s wrong with you?', cn: '你怎么了？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Doctor', text: 'What\'s wrong with you?', cn: '你怎么了？' },
      { speaker: 'Su Hai', text: 'I have a headache and a fever.', cn: '我头疼、发烧。' },
      { speaker: 'Doctor', text: 'Let me check. You should take some medicine.', cn: '让我检查一下。你应该吃点药。' },
      { speaker: 'Su Hai', text: 'Thank you, Doctor.', cn: '谢谢，医生。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Su Hai', text: 'Thank you, Doctor.', cn: '谢谢，医生。' },
    ]},
  ]},
  { title: 'Unit 5 Helping our parents', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mum', text: 'I\'m cooking dinner.', cn: '我在做晚饭。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mum', text: 'I\'m cooking dinner.', cn: '我在做晚饭。' },
      { speaker: 'Helen', text: 'I\'m cleaning the table.', cn: '我在擦桌子。' },
      { speaker: 'Mike', text: 'I\'m washing the dishes.', cn: '我在洗碗。' },
      { speaker: 'Dad', text: 'Good job, children!', cn: '干得好，孩子们！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Dad', text: 'Good job, children!', cn: '干得好，孩子们！' },
    ]},
  ]},
  { title: 'Unit 6 In the kitchen', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Liu Tao', text: 'Mum, I\'m hungry.', cn: '妈妈，我饿了。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Liu Tao', text: 'Mum, I\'m hungry.', cn: '妈妈，我饿了。' },
      { speaker: 'Mum', text: 'Dinner is ready. I\'m cooking meat with potatoes.', cn: '晚饭好了。我在做土豆烧肉。' },
      { speaker: 'Liu Tao', text: 'It smells nice!', cn: '闻起来很香！' },
      { speaker: 'Mum', text: 'Wash your hands first.', cn: '先洗手。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Mum', text: 'Wash your hands first.', cn: '先洗手。' },
    ]},
  ]},
  { title: 'Unit 7 Chinese festivals', page: 'P62-71', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Su Hai', text: 'The Spring Festival is in January or February.', cn: '春节在一月或二月。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Su Hai', text: 'The Spring Festival is in January or February.', cn: '春节在一月或二月。' },
      { speaker: 'Mike', text: 'People eat dumplings at this festival.', cn: '人们在这个节日吃饺子。' },
      { speaker: 'Yang Ling', text: 'The Dragon Boat Festival is in May or June.', cn: '端午节在五月或六月。' },
      { speaker: 'Liu Tao', text: 'People eat rice dumplings.', cn: '人们吃粽子。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Liu Tao', text: 'People eat rice dumplings.', cn: '人们吃粽子。' },
    ]},
  ]},
  { title: 'Unit 8 Birthdays', page: 'P72-81', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Su Hai', text: 'When\'s your birthday?', cn: '你的生日是什么时候？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Su Hai', text: 'When\'s your birthday?', cn: '你的生日是什么时候？' },
      { speaker: 'Mike', text: 'It\'s on the eighth of April.', cn: '四月八日。' },
      { speaker: 'Su Hai', text: 'What do you do on your birthday?', cn: '你生日做什么？' },
      { speaker: 'Mike', text: 'We have a party and eat a birthday cake.', cn: '我们开派对、吃生日蛋糕。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Mike', text: 'We have a party and eat a birthday cake.', cn: '我们开派对、吃生日蛋糕。' },
    ]},
  ]},
  ]},
  // ========== 六年级上册 ==========
  { title: '六年级上册', units: [
  { title: 'Unit 1 The king\'s new clothes', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Tailors', text: 'Only clever people can see the clothes.', cn: '只有聪明人才能看到衣服。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Tailors', text: 'Only clever people can see the clothes.', cn: '只有聪明人才能看到衣服。' },
      { speaker: 'King', text: 'These clothes are beautiful!', cn: '这些衣服真漂亮！' },
      { speaker: 'Boy', text: 'But the king isn\'t wearing any clothes!', cn: '但国王什么也没穿！' },
      { speaker: 'People', text: 'The boy is right!', cn: '男孩说得对！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'People', text: 'The boy is right!', cn: '男孩说得对！' },
    ]},
  ]},
  { title: 'Unit 2 What a day!', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ling', text: 'It was sunny in the morning.', cn: '早上是晴天。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Yang Ling', text: 'It was sunny in the morning.', cn: '早上是晴天。' },
      { speaker: 'Su Hai', text: 'Then it became windy and cloudy.', cn: '然后变得有风和多云。' },
      { speaker: 'Mike', text: 'We brought some food and drinks.', cn: '我们带了一些食物和饮料。' },
      { speaker: 'Liu Tao', text: 'What a day!', cn: '真是难忘的一天！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Liu Tao', text: 'What a day!', cn: '真是难忘的一天！' },
    ]},
  ]},
  { title: 'Unit 3 Holiday fun', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mike', text: 'Where did you go for the holiday?', cn: '你假期去了哪里？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mike', text: 'Where did you go for the holiday?', cn: '你假期去了哪里？' },
      { speaker: 'Liu Tao', text: 'I went to Shanghai. I visited the Bund.', cn: '我去了上海。我参观了外滩。' },
      { speaker: 'Mike', text: 'Did you have a good time?', cn: '你玩得开心吗？' },
      { speaker: 'Liu Tao', text: 'Yes, it was great fun!', cn: '是的，太有趣了！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Liu Tao', text: 'Yes, it was great fun!', cn: '是的，太有趣了！' },
    ]},
  ]},
  { title: 'Unit 4 Then and now', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Grandpa', text: 'Twenty years ago, I wrote letters to friends.', cn: '二十年前，我写信给朋友。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Grandpa', text: 'Twenty years ago, I wrote letters to friends.', cn: '二十年前，我写信给朋友。' },
      { speaker: 'Mike', text: 'Now we can send emails.', cn: '现在我们可以发邮件。' },
      { speaker: 'Grandma', text: 'We bought things from shops.', cn: '我们从商店买东西。' },
      { speaker: 'Su Hai', text: 'Now we can shop on the Internet.', cn: '现在我们可以在网上购物。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Su Hai', text: 'Now we can shop on the Internet.', cn: '现在我们可以在网上购物。' },
    ]},
  ]},
  { title: 'Unit 5 Signs', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mike', text: 'What does this sign mean?', cn: '这个标志是什么意思？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mike', text: 'What does this sign mean?', cn: '这个标志是什么意思？' },
      { speaker: 'Helen', text: 'It means the floor is wet.', cn: '意思是地板湿了。' },
      { speaker: 'Tim', text: 'There\'s a sign. It says "No smoking."', cn: '有一个标志。写着"禁止吸烟"。' },
      { speaker: 'Mike', text: 'We should follow the signs.', cn: '我们应该遵守标志。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Mike', text: 'We should follow the signs.', cn: '我们应该遵守标志。' },
    ]},
  ]},
  { title: 'Unit 6 Keep our city clean', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Miss Li', text: 'Look at these pictures. Is our city clean?', cn: '看这些图片。我们的城市干净吗？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Miss Li', text: 'Look at these pictures. Is our city clean?', cn: '看这些图片。我们的城市干净吗？' },
      { speaker: 'Liu Tao', text: 'No, it\'s dirty. There\'s rubbish everywhere.', cn: '不，很脏。到处是垃圾。' },
      { speaker: 'Su Hai', text: 'We can move some factories away.', cn: '我们可以把一些工厂搬走。' },
      { speaker: 'Miss Li', text: 'Let\'s keep our city clean!', cn: '让我们一起保持城市干净！' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Miss Li', text: 'Let\'s keep our city clean!', cn: '让我们一起保持城市干净！' },
    ]},
  ]},
  { title: 'Unit 7 Protect the Earth', page: 'P62-71', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Wang Bing', text: 'We should save water.', cn: '我们应该节约用水。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Wang Bing', text: 'We should save water.', cn: '我们应该节约用水。' },
      { speaker: 'Yang Ling', text: 'We should save energy.', cn: '我们应该节约能源。' },
      { speaker: 'Mike', text: 'We should not cut down too many trees.', cn: '我们不应该砍太多树。' },
      { speaker: 'Su Hai', text: 'Let\'s protect the Earth together.', cn: '让我们一起来保护地球。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Su Hai', text: 'Let\'s protect the Earth together.', cn: '让我们一起来保护地球。' },
    ]},
  ]},
  { title: 'Unit 8 Chinese New Year', page: 'P72-81', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Anna', text: 'Chinese New Year is coming!', cn: '中国新年要来了！' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Anna', text: 'Chinese New Year is coming!', cn: '中国新年要来了！' },
      { speaker: 'Su Hai', text: 'We are going to buy some new clothes.', cn: '我们要买新衣服。' },
      { speaker: 'Mike', text: 'We\'re going to have a big dinner.', cn: '我们要吃一顿丰盛的晚餐。' },
      { speaker: 'Liu Tao', text: 'We\'re going to watch fireworks.', cn: '我们要看烟花。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Liu Tao', text: 'We\'re going to watch fireworks.', cn: '我们要看烟花。' },
    ]},
  ]},
  ]},
  // ========== 六年级下册 ==========
  { title: '六年级下册', units: [
  { title: 'Unit 1 The lion and the mouse', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Lion', text: 'How can you help me? You\'re so small!', cn: '你怎么能帮我？你这么小！' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Lion', text: 'How can you help me? You\'re so small!', cn: '你怎么能帮我？你这么小！' },
      { speaker: 'Mouse', text: 'Please don\'t eat me. I can help you some day.', cn: '请不要吃我。有一天我能帮你。' },
      { speaker: 'Mouse', text: 'Thank you! Let\'s be friends!', cn: '谢谢！我们做朋友吧！' },
      { speaker: 'Lion', text: 'Yes! Friends are important.', cn: '好！朋友很重要。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Lion', text: 'Yes! Friends are important.', cn: '好！朋友很重要。' },
    ]},
  ]},
  { title: 'Unit 2 Good habits', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Wang Bing', text: 'I get up early every day.', cn: '我每天早起。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Wang Bing', text: 'I get up early every day.', cn: '我每天早起。' },
      { speaker: 'Liu Tao', text: 'I keep my room clean and tidy.', cn: '我保持房间干净整洁。' },
      { speaker: 'Su Hai', text: 'I always finish my homework on time.', cn: '我总是按时完成作业。' },
      { speaker: 'Yang Ling', text: 'We should have good habits.', cn: '我们应该有好习惯。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Yang Ling', text: 'We should have good habits.', cn: '我们应该有好习惯。' },
    ]},
  ]},
  { title: 'Unit 3 A healthy diet', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mike', text: 'I eat a lot of rice and vegetables.', cn: '我吃很多米饭和蔬菜。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mike', text: 'I eat a lot of rice and vegetables.', cn: '我吃很多米饭和蔬菜。' },
      { speaker: 'Yang Ling', text: 'I like sweet food, but I eat a little at a time.', cn: '我喜欢甜食，但一次只吃一点。' },
      { speaker: 'Doctor', text: 'You should drink lots of water.', cn: '你应该多喝水。' },
      { speaker: 'Mike', text: 'A healthy diet is very important.', cn: '健康饮食很重要。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Mike', text: 'A healthy diet is very important.', cn: '健康饮食很重要。' },
    ]},
  ]},
  { title: 'Unit 4 Road safety', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mr Green', text: 'How can we cross the road safely?', cn: '我们怎样才能安全过马路？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mr Green', text: 'How can we cross the road safely?', cn: '我们怎样才能安全过马路？' },
      { speaker: 'Liu Tao', text: 'We must look at the traffic lights.', cn: '我们必须看红绿灯。' },
      { speaker: 'Su Hai', text: 'We must wait on the pavement.', cn: '我们必须在人行道上等。' },
      { speaker: 'Mike', text: 'Road safety is very important.', cn: '道路安全很重要。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Mike', text: 'Road safety is very important.', cn: '道路安全很重要。' },
    ]},
  ]},
  { title: 'Unit 5 A party', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Su Hai', text: 'We\'re going to have a party this Sunday.', cn: '这周日我们要开派对。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Su Hai', text: 'We\'re going to have a party this Sunday.', cn: '这周日我们要开派对。' },
      { speaker: 'Mike', text: 'What are you going to bring?', cn: '你要带什么？' },
      { speaker: 'Wang Bing', text: 'I\'m going to bring some balloons.', cn: '我要带气球。' },
      { speaker: 'Yang Ling', text: 'I\'m going to bring some snacks.', cn: '我要带零食。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Yang Ling', text: 'I\'m going to bring some snacks.', cn: '我要带零食。' },
    ]},
  ]},
  { title: 'Unit 6 An interesting country', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mike', text: 'I\'ll ask my e-friend in Australia.', cn: '我会问我在澳大利亚的网友。' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Mike', text: 'I\'ll ask my e-friend in Australia.', cn: '我会问我在澳大利亚的网友。' },
      { speaker: 'Liu Tao', text: 'Australia is an interesting country.', cn: '澳大利亚是个有趣的国家。' },
      { speaker: 'Yang Ling', text: 'There are kangaroos and koalas there.', cn: '那里有袋鼠和考拉。' },
      { speaker: 'Su Hai', text: 'I want to visit Australia one day.', cn: '我想有一天去澳大利亚。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Su Hai', text: 'I want to visit Australia one day.', cn: '我想有一天去澳大利亚。' },
    ]},
  ]},
  { title: 'Unit 7 Summer holiday plans', page: 'P62-71', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Yang Ling', text: 'Where will you go for the summer holiday?', cn: '暑假你要去哪里？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Yang Ling', text: 'Where will you go for the summer holiday?', cn: '暑假你要去哪里？' },
      { speaker: 'Mike', text: 'I\'ll go back to London.', cn: '我会回伦敦。' },
      { speaker: 'Su Hai', text: 'I\'ll visit my aunt in Beijing.', cn: '我会去看北京的大姨。' },
      { speaker: 'Liu Tao', text: 'I\'ll go to Ocean Park in Hong Kong.', cn: '我会去香港海洋公园。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: '', text: 'Fun and practice.', cn: '趣味练习。' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Liu Tao', text: 'I\'ll go to Ocean Park in Hong Kong.', cn: '我会去香港海洋公园。' },
    ]},
  ]},
  { title: 'Unit 8 Our dreams', page: 'P72-81', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Miss Li', text: 'What do you want to be in the future?', cn: '你将来想做什么？' },
    ]},
    { type: 'talk', title: 'Story time', dialogues: [
      { speaker: 'Miss Li', text: 'What do you want to be in the future?', cn: '你将来想做什么？' },
      { speaker: 'Mike', text: 'I want to be a dentist.', cn: '我想做牙医。' },
      { speaker: 'Wang Bing', text: 'I want to be an astronaut.', cn: '我想做宇航员。' },
      { speaker: 'Su Hai', text: 'I want to be a dancer.', cn: '我想做舞蹈家。' },
    ]},
    { type: 'learn', title: 'Fun time', dialogues: [
      { speaker: 'Yang Ling', text: 'I want to be a pianist.', cn: '我想做钢琴家。' },
      { speaker: 'Miss Li', text: 'Follow your dreams, children!', cn: '追逐你们的梦想，孩子们！' },
    ]},
    { type: 'activity', title: 'Cartoon time', dialogues: [
      { speaker: 'Su Hai', text: 'I want to be a dancer.', cn: '我想做舞蹈家。' },
      { speaker: 'Yang Ling', text: 'I want to be a pianist.', cn: '我想做钢琴家。' },
    ]},
  ]},
  ]},
];
