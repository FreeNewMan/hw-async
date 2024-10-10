import GameSaving from "../GameSaving";

describe('Проверка создания объекта', () => { 
  
  test(' Тестирование метода load', () => {
    const obj = new GameSaving(1, new Date(), 
    {
       id : 2, // user id
       name : 'user1', // user name
       level : 1, // user level
       points : 2 // user points
    }
  );

  const expObj = 
    {
      id: 1, // id сохранения
      created:  new Date(), // timestamp создания
      userInfo: {
        id: 2, // user id
        name: 'user1', // user name
        level: 1,  // user level
        points: 2 // user points
      }
    };

   // console.log(obj);
  
    expect(obj).toEqual(expObj);
  })

}); 
