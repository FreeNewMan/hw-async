import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
   static load(){
    return read()
      .then((data) => {
        return json(data);
      })
      .then((data) => {
        let jsonData = JSON.parse(data);
        return new GameSaving(jsonData.id, jsonData.created, jsonData.userInfo);
      });
  }
}


