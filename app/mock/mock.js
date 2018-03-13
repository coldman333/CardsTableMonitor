import { Observable } from 'rxjs/Observable';
import Rx from 'rxjs/Rx';

const COUNT = 150;
const TIMEOUT = 1000;

const createAsset = (assetId) => ({
    id: assetId,
    type: ['Poker', 'Solitaire', 'Shuffling', 'Deal', 'BloodWars'][Math.floor(Math.random() * 4)],
    name: `Table ${assetId}`,
    warning: false,
    players: Math.floor(Math.random() * 5),
    maxPlayers: Math.floor((Math.random() * 10)) + 5,
});

const getAllAssets = (n) => {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(createAsset(i));
    }
    return result;
};

export const assets = getAllAssets(COUNT);

const timeObservable = Rx.Observable.interval(TIMEOUT);

export const mock = Observable.create((ob) => {
    timeObservable.subscribe(() => {
        const random = Math.floor( Math.random() * assets.length);
        const val  = assets[random];
        // val.warning = !val.warning ? [true, false][Math.floor(Math.random() * 2)] : val.warning;
        val.warning = [true, false][Math.floor(Math.random() * 2)] ;
        val.players = Math.floor(Math.random() * val.maxPlayers);
        assets[random] = val;
        Rx.Observable.from([{...val}]).subscribe(value => ob.next(value));
    });
    return () => null; // we don't care about unsubscribe just for a test
});
