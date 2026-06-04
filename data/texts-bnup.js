// data/texts-bnup.js — 北师大版（三起点）3-6年级课文对话
const bnupTexts = [
  // ========== 三年级上册 ==========
  { title: '三年级上册', units: [
  { title: 'Unit 1 Hello!', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'Hello! I\'m Mocky.', cn: '你好！我是Mocky。' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'Hello! I\'m Mocky.', cn: '你好！我是Mocky。' },
      { speaker: 'Ann', text: 'Hi, Mocky! I\'m Ann.', cn: '嗨，Mocky！我是Ann。' },
      { speaker: 'Ken', text: 'Hello! My name is Ken.', cn: '你好！我叫Ken。' },
      { speaker: 'Uncle Booky', text: 'Welcome, children!', cn: '欢迎，孩子们！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Uncle Booky', text: 'Welcome, children!', cn: '欢迎，孩子们！' },
    ]},
  ]},
  { title: 'Unit 2 Friends', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'This is my friend, Ken.', cn: '这是我的朋友，Ken。' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'This is my friend, Ken.', cn: '这是我的朋友，Ken。' },
      { speaker: 'Ann', text: 'Nice to meet you, Ken.', cn: '很高兴认识你，Ken。' },
      { speaker: 'Ken', text: 'Nice to meet you too.', cn: '我也很高兴。' },
      { speaker: 'Mocky', text: 'Let\'s be good friends!', cn: '我们做好朋友吧！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'Let\'s be good friends!', cn: '我们做好朋友吧！' },
    ]},
  ]},
  { title: 'Unit 3 At school', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Ann', text: 'This is our school.', cn: '这是我们学校。' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Ann', text: 'This is our school.', cn: '这是我们学校。' },
      { speaker: 'Mocky', text: 'It\'s big! What\'s this?', cn: '好大！这是什么？' },
      { speaker: 'Ken', text: 'This is the playground.', cn: '这是操场。' },
      { speaker: 'Ann', text: 'We play here every day.', cn: '我们每天在这里玩。' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Ann', text: 'We play here every day.', cn: '我们每天在这里玩。' },
    ]},
  ]},
  { title: 'Unit 4 My family', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Ann', text: 'This is my family.', cn: '这是我的家庭。' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Ann', text: 'This is my family.', cn: '这是我的家庭。' },
      { speaker: 'Mocky', text: 'Who\'s that?', cn: '那是谁？' },
      { speaker: 'Ann', text: 'That\'s my mother. She\'s a teacher.', cn: '那是我妈妈。她是老师。' },
      { speaker: 'Ken', text: 'And this is my father. He\'s a doctor.', cn: '这是我爸爸。他是医生。' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Ken', text: 'And this is my father. He\'s a doctor.', cn: '这是我爸爸。他是医生。' },
    ]},
  ]},
  { title: 'Unit 5 Our town', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'Where\'s the supermarket?', cn: '超市在哪里？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'Where\'s the supermarket?', cn: '超市在哪里？' },
      { speaker: 'Ann', text: 'It\'s near the park.', cn: '在公园附近。' },
      { speaker: 'Ken', text: 'The library is next to the school.', cn: '图书馆在学校旁边。' },
      { speaker: 'Mocky', text: 'I like this town!', cn: '我喜欢这个小镇！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'I like this town!', cn: '我喜欢这个小镇！' },
    ]},
  ]},
  { title: 'Unit 6 Review', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Uncle Booky', text: 'What did you learn this term?', cn: '这学期你学了什么？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Uncle Booky', text: 'What did you learn this term?', cn: '这学期你学了什么？' },
      { speaker: 'Mocky', text: 'I learned to greet people!', cn: '我学会了问候人！' },
      { speaker: 'Ann', text: 'I can introduce my family.', cn: '我能介绍我的家人。' },
      { speaker: 'Ken', text: 'We had a lot of fun!', cn: '我们玩得很开心！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Ken', text: 'We had a lot of fun!', cn: '我们玩得很开心！' },
    ]},
  ]},
  ]},
  // ========== 三年级下册 ==========
  { title: '三年级下册', units: [
  { title: 'Unit 7 Fruits', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'What\'s this?', cn: '这是什么？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'What\'s this?', cn: '这是什么？' },
      { speaker: 'Ann', text: 'It\'s a banana. I like bananas.', cn: '是香蕉。我喜欢香蕉。' },
      { speaker: 'Ken', text: 'Is it a pear?', cn: '是梨吗？' },
      { speaker: 'Ann', text: 'No, it\'s an apple. It\'s sweet.', cn: '不，是苹果。很甜。' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Ann', text: 'No, it\'s an apple. It\'s sweet.', cn: '不，是苹果。很甜。' },
    ]},
  ]},
  { title: 'Unit 8 Vegetables', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Ann', text: 'These are tomatoes.', cn: '这些是西红柿。' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Ann', text: 'These are tomatoes.', cn: '这些是西红柿。' },
      { speaker: 'Mocky', text: 'Are they fruit?', cn: '它们是水果吗？' },
      { speaker: 'Ken', text: 'No, tomatoes are vegetables.', cn: '不，西红柿是蔬菜。' },
      { speaker: 'Ann', text: 'Vegetables are good for us.', cn: '蔬菜对我们有好处。' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Ann', text: 'Vegetables are good for us.', cn: '蔬菜对我们有好处。' },
    ]},
  ]},
  { title: 'Unit 9 Food and drink', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'I\'m hungry!', cn: '我饿了！' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'I\'m hungry!', cn: '我饿了！' },
      { speaker: 'Ann', text: 'Have some bread.', cn: '吃点面包。' },
      { speaker: 'Ken', text: 'I\'m thirsty. Can I have some milk?', cn: '我渴了。能喝点牛奶吗？' },
      { speaker: 'Mocky', text: 'Milk is my favourite!', cn: '牛奶是我的最爱！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'Milk is my favourite!', cn: '牛奶是我的最爱！' },
    ]},
  ]},
  { title: 'Unit 10 Numbers', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'How many birds?', cn: '多少只鸟？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'How many birds?', cn: '多少只鸟？' },
      { speaker: 'Ann', text: 'One, two, three... eleven birds!', cn: '一、二、三……十一只鸟！' },
      { speaker: 'Ken', text: 'How many flowers?', cn: '多少朵花？' },
      { speaker: 'Ann', text: 'Twenty flowers!', cn: '二十朵花！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Ann', text: 'Twenty flowers!', cn: '二十朵花！' },
    ]},
  ]},
  { title: 'Unit 11 I can climb', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'Look, I can climb the tree!', cn: '看，我能爬树！' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'Look, I can climb the tree!', cn: '看，我能爬树！' },
      { speaker: 'Ann', text: 'Be careful, Mocky!', cn: '小心，Mocky！' },
      { speaker: 'Ken', text: 'Can you swim?', cn: '你会游泳吗？' },
      { speaker: 'Mocky', text: 'No, I can\'t swim. But I can run!', cn: '不会。但我会跑！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'No, I can\'t swim. But I can run!', cn: '不会。但我会跑！' },
    ]},
  ]},
  { title: 'Unit 12 Review', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Uncle Booky', text: 'Can you count to twenty?', cn: '你能数到二十吗？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Uncle Booky', text: 'Can you count to twenty?', cn: '你能数到二十吗？' },
      { speaker: 'Mocky', text: 'Yes! One to twenty!', cn: '能！一到二十！' },
      { speaker: 'Ann', text: 'We learned about food and numbers.', cn: '我们学了食物和数字。' },
      { speaker: 'Ken', text: 'It was a great term!', cn: '很棒的学期！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Ken', text: 'It was a great term!', cn: '很棒的学期！' },
    ]},
  ]},
  ]},
  // ========== 四年级上册 ==========
  { title: '四年级上册', units: [
  { title: 'Unit 1 Don\'t walk!', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'Look at the sign. "Don\'t walk!"', cn: '看标志。"不要走！"' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'Look at the sign. "Don\'t walk!"', cn: '看标志。"不要走！"' },
      { speaker: 'Ann', text: 'We must wait for the green light.', cn: '我们必须等绿灯。' },
      { speaker: 'Ken', text: 'Safety first!', cn: '安全第一！' },
      { speaker: 'Mocky', text: 'I understand. Thank you!', cn: '我明白了。谢谢！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'I understand. Thank you!', cn: '我明白了。谢谢！' },
    ]},
  ]},
  { title: 'Unit 2 How much?', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'How much is this pencil?', cn: '这支铅笔多少钱？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'How much is this pencil?', cn: '这支铅笔多少钱？' },
      { speaker: 'Ann', text: 'It\'s two yuan.', cn: '两元。' },
      { speaker: 'Ken', text: 'How much are these books?', cn: '这些书多少钱？' },
      { speaker: 'Shopkeeper', text: 'They\'re thirty yuan.', cn: '三十元。' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Shopkeeper', text: 'They\'re thirty yuan.', cn: '三十元。' },
    ]},
  ]},
  { title: 'Unit 3 Uncle Booky\'s blackboard', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Uncle Booky', text: 'Look at the blackboard, children.', cn: '看黑板，孩子们。' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Uncle Booky', text: 'Look at the blackboard, children.', cn: '看黑板，孩子们。' },
      { speaker: 'Mocky', text: 'What are these words?', cn: '这些是什么词？' },
      { speaker: 'Uncle Booky', text: 'These are action words: run, jump, walk.', cn: '这些是动作词：跑、跳、走。' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: '', text: 'Sing together!', cn: '一起唱！' },
    ]},
  ]},
  { title: 'Unit 4 Dinner time', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Ann', text: 'What\'s for dinner?', cn: '晚饭吃什么？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Ann', text: 'What\'s for dinner?', cn: '晚饭吃什么？' },
      { speaker: 'Mom', text: 'We have rice, fish and vegetables.', cn: '有米饭、鱼和蔬菜。' },
      { speaker: 'Mocky', text: 'Yummy! I love fish!', cn: '好吃！我爱鱼！' },
      { speaker: 'Ken', text: 'Can I have some soup too?', cn: '我也能喝点汤吗？' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Ken', text: 'Can I have some soup too?', cn: '我也能喝点汤吗？' },
    ]},
  ]},
  { title: 'Unit 5 Our town', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'Where are we going?', cn: '我们要去哪里？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'Where are we going?', cn: '我们要去哪里？' },
      { speaker: 'Ken', text: 'We\'re going to the zoo!', cn: '我们要去动物园！' },
      { speaker: 'Ann', text: 'Turn left here. Then go straight.', cn: '这里左转。然后直走。' },
      { speaker: 'Mocky', text: 'I\'m so excited!', cn: '我好兴奋！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'I\'m so excited!', cn: '我好兴奋！' },
    ]},
  ]},
  { title: 'Unit 6 Review', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Uncle Booky', text: 'Tell me about signs.', cn: '跟我说说标志。' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Uncle Booky', text: 'Tell me about signs.', cn: '跟我说说标志。' },
      { speaker: 'Mocky', text: 'Red means stop. Green means go.', cn: '红停绿行。' },
      { speaker: 'Ann', text: 'We should follow the rules.', cn: '我们应该遵守规则。' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: '', text: 'Sing together!', cn: '一起唱！' },
    ]},
  ]},
  ]},
  // ========== 四年级下册 ==========
  { title: '四年级下册', units: [
  { title: 'Unit 7 Today is Monday', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'What day is it today?', cn: '今天星期几？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'What day is it today?', cn: '今天星期几？' },
      { speaker: 'Ann', text: 'Today is Monday.', cn: '今天星期一。' },
      { speaker: 'Ken', text: 'We have English on Monday.', cn: '我们星期一有英语课。' },
      { speaker: 'Mocky', text: 'I like English!', cn: '我喜欢英语！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'I like English!', cn: '我喜欢英语！' },
    ]},
  ]},
  { title: 'Unit 8 Mocky\'s watch', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'What time is it?', cn: '几点了？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'What time is it?', cn: '几点了？' },
      { speaker: 'Ann', text: 'It\'s three o\'clock.', cn: '三点。' },
      { speaker: 'Mocky', text: 'Oh no! I\'m late!', cn: '哦不！我迟到了！' },
      { speaker: 'Ken', text: 'It\'s OK, Mocky. The party is at four.', cn: '没事，Mocky。派对在四点。' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Ken', text: 'It\'s OK, Mocky. The party is at four.', cn: '没事，Mocky。派对在四点。' },
    ]},
  ]},
  { title: 'Unit 9 Day and night', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Ann', text: 'When do you get up?', cn: '你几点起床？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Ann', text: 'When do you get up?', cn: '你几点起床？' },
      { speaker: 'Mocky', text: 'I get up at seven o\'clock.', cn: '我七点起床。' },
      { speaker: 'Ken', text: 'When do you go to bed?', cn: '你几点睡觉？' },
      { speaker: 'Mocky', text: 'I go to bed at nine.', cn: '我九点睡觉。' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'I go to bed at nine.', cn: '我九点睡觉。' },
    ]},
  ]},
  { title: 'Unit 10 Let\'s go!', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'Let\'s go to the park!', cn: '我们去公园吧！' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'Let\'s go to the park!', cn: '我们去公园吧！' },
      { speaker: 'Ann', text: 'How do we go there?', cn: '我们怎么去？' },
      { speaker: 'Ken', text: 'We can walk. It\'s near.', cn: '可以走路。很近。' },
      { speaker: 'Mocky', text: 'Great! Let\'s go!', cn: '太好了！走吧！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'Great! Let\'s go!', cn: '太好了！走吧！' },
    ]},
  ]},
  { title: 'Unit 11 Green berries', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'I want to eat those berries!', cn: '我想吃那些浆果！' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'I want to eat those berries!', cn: '我想吃那些浆果！' },
      { speaker: 'Ann', text: 'Wait, Mocky! They\'re green.', cn: '等等，Mocky！它们是青色的。' },
      { speaker: 'Ken', text: 'You have a stomachache now.', cn: '你现在肚子疼了。' },
      { speaker: 'Mocky', text: 'I should listen to my friends.', cn: '我应该听朋友的话。' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'I should listen to my friends.', cn: '我应该听朋友的话。' },
    ]},
  ]},
  { title: 'Unit 12 Review', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Uncle Booky', text: 'What time is your English class?', cn: '英语课几点？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Uncle Booky', text: 'What time is your English class?', cn: '英语课几点？' },
      { speaker: 'Ann', text: 'It\'s at half past nine.', cn: '九点半。' },
      { speaker: 'Mocky', text: 'I\'m never late now!', cn: '我现在从不迟到了！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: '', text: 'Sing together!', cn: '一起唱！' },
    ]},
  ]},
  ]},
  // ========== 五年级上册 ==========
  { title: '五年级上册', units: [
  { title: 'Unit 1 Mocky the juggler', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Ann', text: 'What can you do, Mocky?', cn: 'Mocky，你会做什么？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Ann', text: 'What can you do, Mocky?', cn: 'Mocky，你会做什么？' },
      { speaker: 'Mocky', text: 'I can juggle! Look!', cn: '我会杂耍！看！' },
      { speaker: 'Ken', text: 'Wow, that\'s amazing!', cn: '哇，太棒了！' },
      { speaker: 'Mocky', text: 'Three balls, four balls, five... Oops!', cn: '三个球、四个球、五个……哎呀！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'Three balls, four balls, five... Oops!', cn: '三个球、四个球、五个……哎呀！' },
    ]},
  ]},
  { title: 'Unit 2 Ann\'s dream', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Ann', text: 'I had a dream last night.', cn: '昨晚我做了个梦。' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Ann', text: 'I had a dream last night.', cn: '昨晚我做了个梦。' },
      { speaker: 'Mocky', text: 'What was it about?', cn: '什么梦？' },
      { speaker: 'Ann', text: 'I was an astronaut. I went to Mars.', cn: '我是宇航员。我去了火星。' },
      { speaker: 'Ken', text: 'That\'s a cool dream!', cn: '好酷的梦！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Ken', text: 'That\'s a cool dream!', cn: '好酷的梦！' },
    ]},
  ]},
  { title: 'Unit 3 School sports day', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Ken', text: 'It\'s sports day today!', cn: '今天是运动会！' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Ken', text: 'It\'s sports day today!', cn: '今天是运动会！' },
      { speaker: 'Mocky', text: 'I can run fast. I want to enter the race.', cn: '我跑得快。我想参加赛跑。' },
      { speaker: 'Ann', text: 'Good luck, Mocky!', cn: '祝你好运，Mocky！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: '', text: 'Sing together!', cn: '一起唱！' },
    ]},
  ]},
  { title: 'Unit 4 Mocky\'s birthday', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Ann', text: 'Happy birthday, Mocky!', cn: '生日快乐，Mocky！' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Ann', text: 'Happy birthday, Mocky!', cn: '生日快乐，Mocky！' },
      { speaker: 'Ken', text: 'Here\'s a present for you.', cn: '这是给你的礼物。' },
      { speaker: 'Mocky', text: 'Thank you! What is it?', cn: '谢谢！是什么？' },
      { speaker: 'Ann', text: 'It\'s a new hat!', cn: '是一顶新帽子！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Ann', text: 'It\'s a new hat!', cn: '是一顶新帽子！' },
    ]},
  ]},
  { title: 'Unit 5 I\'m taller', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'I\'m taller than Ann now!', cn: '我比Ann高了！' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'I\'m taller than Ann now!', cn: '我比Ann高了！' },
      { speaker: 'Ann', text: 'Yes, you are! You grew a lot.', cn: '是的！你长了很多。' },
      { speaker: 'Ken', text: 'But I\'m the tallest!', cn: '但我最高！' },
      { speaker: 'Mocky', text: 'No fair! You\'re older!', cn: '不公平！你年纪大！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'No fair! You\'re older!', cn: '不公平！你年纪大！' },
    ]},
  ]},
  { title: 'Unit 6 Review', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Uncle Booky', text: 'You can do many things now.', cn: '你现在能做很多事了。' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Uncle Booky', text: 'You can do many things now.', cn: '你现在能做很多事了。' },
      { speaker: 'Mocky', text: 'I can juggle, run fast and help friends.', cn: '我会杂耍、跑得快、帮助朋友。' },
      { speaker: 'Ann', text: 'We have lots of fun together.', cn: '我们一起有很多乐趣。' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: '', text: 'Sing together!', cn: '一起唱！' },
    ]},
  ]},
  ]},
  // ========== 五年级下册 ==========
  { title: '五年级下册', units: [
  { title: 'Unit 7 The mountain bike race', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Ken', text: 'Are you ready for the bike race?', cn: '自行车赛准备好了吗？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Ken', text: 'Are you ready for the bike race?', cn: '自行车赛准备好了吗？' },
      { speaker: 'Mocky', text: 'Yes! I practised a lot.', cn: '好了！我练习了很多。' },
      { speaker: 'Ann', text: 'Be careful, Mocky.', cn: '小心，Mocky。' },
      { speaker: 'Mocky', text: 'Don\'t worry, Ann. I can do it!', cn: '别担心，Ann。我能行！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'Don\'t worry, Ann. I can do it!', cn: '别担心，Ann。我能行！' },
    ]},
  ]},
  { title: 'Unit 8 At the restaurant', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'I\'d like a hamburger and chips.', cn: '我要一个汉堡和薯条。' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'I\'d like a hamburger and chips.', cn: '我要一个汉堡和薯条。' },
      { speaker: 'Ann', text: 'I\'ll have noodles and vegetables.', cn: '我要面条和蔬菜。' },
      { speaker: 'Ken', text: 'Can I have some juice?', cn: '能来点果汁吗？' },
      { speaker: 'Waiter', text: 'Of course. Anything else?', cn: '当然。还要什么吗？' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Waiter', text: 'Of course. Anything else?', cn: '当然。还要什么吗？' },
    ]},
  ]},
  { title: 'Unit 9 Day and night', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Ken', text: 'When the sun rises, we wake up.', cn: '太阳升起，我们醒来。' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Ken', text: 'When the sun rises, we wake up.', cn: '太阳升起，我们醒来。' },
      { speaker: 'Ann', text: 'We go to school in the daytime.', cn: '我们白天上学。' },
      { speaker: 'Mocky', text: 'At night, the moon comes out.', cn: '晚上，月亮出来。' },
      { speaker: 'Uncle Booky', text: 'The Earth goes around the sun.', cn: '地球绕着太阳转。' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Uncle Booky', text: 'The Earth goes around the sun.', cn: '地球绕着太阳转。' },
    ]},
  ]},
  { title: 'Unit 10 Buying e-books', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'Let\'s buy some e-books!', cn: '我们买电子书吧！' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'Let\'s buy some e-books!', cn: '我们买电子书吧！' },
      { speaker: 'Ann', text: 'Good idea. Which book do you want?', cn: '好主意。你想要哪本书？' },
      { speaker: 'Ken', text: 'I want this one about space.', cn: '我要这本关于太空的。' },
      { speaker: 'Mocky', text: 'E-books are very convenient.', cn: '电子书很方便。' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'E-books are very convenient.', cn: '电子书很方便。' },
    ]},
  ]},
  { title: 'Unit 11 Uncle Jack\'s farm', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'What a big farm!', cn: '好大的农场！' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'What a big farm!', cn: '好大的农场！' },
      { speaker: 'Uncle Jack', text: 'We have cows, sheep and chickens.', cn: '我们有奶牛、羊和鸡。' },
      { speaker: 'Ann', text: 'I can see horses too!', cn: '我也看到马了！' },
      { speaker: 'Ken', text: 'Can we ride them?', cn: '我们能骑吗？' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Ken', text: 'Can we ride them?', cn: '我们能骑吗？' },
    ]},
  ]},
  { title: 'Unit 12 Review', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Uncle Booky', text: 'What was your favourite unit?', cn: '你最喜欢哪个单元？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Uncle Booky', text: 'What was your favourite unit?', cn: '你最喜欢哪个单元？' },
      { speaker: 'Mocky', text: 'The farm visit was the best!', cn: '农场参观最棒！' },
      { speaker: 'Ann', text: 'I liked the bike race story.', cn: '我喜欢自行车赛的故事。' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: '', text: 'Sing together!', cn: '一起唱！' },
    ]},
  ]},
  ]},
  // ========== 六年级上册 ==========
  { title: '六年级上册', units: [
  { title: 'Unit 1 Space', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'I want to go to space!', cn: '我想去太空！' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'I want to go to space!', cn: '我想去太空！' },
      { speaker: 'Ann', text: 'You need to train for years.', cn: '你需要训练好几年。' },
      { speaker: 'Ken', text: 'Astronauts are very brave.', cn: '宇航员很勇敢。' },
      { speaker: 'Mocky', text: 'One day, I\'ll walk on the moon!', cn: '总有一天，我能在月球上走！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'One day, I\'ll walk on the moon!', cn: '总有一天，我能在月球上走！' },
    ]},
  ]},
  { title: 'Unit 2 Mocky\'s bad day', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'Yesterday was a bad day.', cn: '昨天是糟糕的一天。' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'Yesterday was a bad day.', cn: '昨天是糟糕的一天。' },
      { speaker: 'Ann', text: 'What happened?', cn: '怎么了？' },
      { speaker: 'Mocky', text: 'I fell off my bike and hurt my arm.', cn: '我从自行车摔下来，伤了胳膊。' },
      { speaker: 'Ken', text: 'Are you OK now?', cn: '你现在好了吗？' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Ken', text: 'Are you OK now?', cn: '你现在好了吗？' },
    ]},
  ]},
  { title: 'Unit 3 Redrock Bay Health Club', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'Let\'s join the health club!', cn: '我们加入健身俱乐部吧！' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'Let\'s join the health club!', cn: '我们加入健身俱乐部吧！' },
      { speaker: 'Ann', text: 'We can swim and play tennis there.', cn: '我们可以在那里游泳打网球。' },
      { speaker: 'Ken', text: 'Exercise makes us strong.', cn: '运动让我们强壮。' },
      { speaker: 'Mocky', text: 'I want to try everything!', cn: '我什么都想试！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'I want to try everything!', cn: '我什么都想试！' },
    ]},
  ]},
  { title: 'Unit 4 Choosing a present', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Ann', text: 'Uncle Booky\'s birthday is coming.', cn: 'Booky叔叔的生日快到了。' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Ann', text: 'Uncle Booky\'s birthday is coming.', cn: 'Booky叔叔的生日快到了。' },
      { speaker: 'Mocky', text: 'What should we get him?', cn: '我们该送他什么？' },
      { speaker: 'Ken', text: 'Let\'s buy him some books.', cn: '我们给他买几本书吧。' },
      { speaker: 'Mocky', text: 'He loves books! Good idea!', cn: '他爱书！好主意！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'He loves books! Good idea!', cn: '他爱书！好主意！' },
    ]},
  ]},
  { title: 'Unit 5 The broken computer', page: 'P42-51', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'The computer doesn\'t work!', cn: '电脑坏了！' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'The computer doesn\'t work!', cn: '电脑坏了！' },
      { speaker: 'Ken', text: 'Did you spill water on it?', cn: '你把水洒上面了吗？' },
      { speaker: 'Mocky', text: 'Maybe... I\'m sorry!', cn: '也许……对不起！' },
      { speaker: 'Ann', text: 'We should tell Uncle Booky.', cn: '我们应该告诉Booky叔叔。' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Ann', text: 'We should tell Uncle Booky.', cn: '我们应该告诉Booky叔叔。' },
    ]},
  ]},
  { title: 'Unit 6 Review', page: 'P52-61', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Uncle Booky', text: 'What have you learned this term?', cn: '这学期你学到了什么？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Uncle Booky', text: 'What have you learned this term?', cn: '这学期你学到了什么？' },
      { speaker: 'Mocky', text: 'About space, health and being honest.', cn: '关于太空、健康和诚实。' },
      { speaker: 'Ann', text: 'We\'re growing up!', cn: '我们在长大！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: '', text: 'Sing together!', cn: '一起唱！' },
    ]},
  ]},
  ]},
  // ========== 六年级下册 ==========
  { title: '六年级下册', units: [
  { title: 'Unit 7 The mountain bike race', page: 'P2-11', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Ken', text: 'The big race is today!', cn: '大赛就在今天！' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Ken', text: 'The big race is today!', cn: '大赛就在今天！' },
      { speaker: 'Mocky', text: 'I\'m ready. I trained every day.', cn: '我准备好了。我每天都训练。' },
      { speaker: 'Ann', text: 'Win or lose, we\'re proud of you.', cn: '无论输赢，我们为你骄傲。' },
      { speaker: 'Mocky', text: 'Thanks, friends! Here I go!', cn: '谢谢朋友们！我去了！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'Thanks, friends! Here I go!', cn: '谢谢朋友们！我去了！' },
    ]},
  ]},
  { title: 'Unit 8 In the emergency room', page: 'P12-21', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Doctor', text: 'What\'s the matter, young man?', cn: '怎么了，年轻人？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Doctor', text: 'What\'s the matter, young man?', cn: '怎么了，年轻人？' },
      { speaker: 'Mocky', text: 'I fell during the race. My leg hurts.', cn: '比赛时摔了。腿疼。' },
      { speaker: 'Ann', text: 'Is he OK, doctor?', cn: '医生，他没事吧？' },
      { speaker: 'Doctor', text: 'Nothing serious. He needs rest.', cn: '不严重。需要休息。' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Doctor', text: 'Nothing serious. He needs rest.', cn: '不严重。需要休息。' },
    ]},
  ]},
  { title: 'Unit 9 Life in the year 2050', page: 'P22-31', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Mocky', text: 'What will life be like in 2050?', cn: '2050年的生活会是什么样？' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Mocky', text: 'What will life be like in 2050?', cn: '2050年的生活会是什么样？' },
      { speaker: 'Ann', text: 'Maybe robots will do all the housework.', cn: '也许机器人会做所有家务。' },
      { speaker: 'Ken', text: 'People might live on Mars.', cn: '人们可能住在火星上。' },
      { speaker: 'Mocky', text: 'I hope we\'ll have flying cars!', cn: '我希望有飞车！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Mocky', text: 'I hope we\'ll have flying cars!', cn: '我希望有飞车！' },
    ]},
  ]},
  { title: 'Unit 10 Review', page: 'P32-41', sections: [
    { type: 'warmup', title: 'Warm-up', dialogues: [
      { speaker: 'Uncle Booky', text: 'You\'ve grown so much, children.', cn: '你们长大了不少，孩子们。' },
    ]},
    { type: 'talk', title: 'Talk together', dialogues: [
      { speaker: 'Uncle Booky', text: 'You\'ve grown so much, children.', cn: '你们长大了不少，孩子们。' },
      { speaker: 'Mocky', text: 'We learned so many things with you.', cn: '我们跟你学了这么多东西。' },
      { speaker: 'Ann', text: 'Thank you, Uncle Booky!', cn: '谢谢，Booky叔叔！' },
      { speaker: 'Ken', text: 'We\'ll miss this school!', cn: '我们会想念这所学校的！' },
    ]},
    { type: 'learn', title: 'Listen and check', dialogues: [
      { speaker: '', text: 'Listen and check.', cn: '听一听，选一选。' },
    ]},
    { type: 'activity', title: 'Let\\\'s sing', dialogues: [
      { speaker: 'Ken', text: 'We\'ll miss this school!', cn: '我们会想念这所学校的！' },
    ]},
  ]},
  ]},
];
