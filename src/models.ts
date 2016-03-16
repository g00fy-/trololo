
const serialize = (options: {type: string} = {type: 'string'}) => {
    return (target, key) => {
        console.log('target', target);
        console.log('key', key);
    };
};

export class Location {
    @serialize({
        type: 'value'
    })
    name: string;
}

console.log(Location)