import * as library from 'library.js';

const felidae = new TreeNode('Felidae', ['Felinae', 'Pantherinae']);
const felinae = new TreeNode('Felinae', ['Felis', 'Leopardus', 'Leptailurus', 'Caracal', 'Pardofelis', 'Catopuma']);
const pantherinae = new TreeNode('Pantherinae', ['Neofelis', 'Panthera']);
const felis = new TreeNode('Felis', ['wildcats', 'Sand Cat', 'Black-footed Cat', 'Jungle Cat', 'Otocolobus', 'Prionailurus']);
const leopardus = new TreeNode('Leopardus', ['Margay', 'Ocelot', 'Pampas Cat', 'Andean Mountain Cat ', 'Oncilla', 'Kodkod', `Geoffroy's cat`]);
const leptailurus = new TreeNode('Leptailurus', ['Serval']);
const caracal = new TreeNode('Caracal', ['African Golden Cat', 'Caracal']);
const neofelis = new TreeNode('Neofelis', ['Sunda Clouded Leopard', 'Clouded Leopard ']);

const binaryTree1 = {
    value: 10,
    descRight: {
        value: 13,
        decsRight: null,
        decsLeft: {
            value: 4,
            decsRight: {
                value: 7
            },
            decsLeft: 12
        }
    },
    descLeft: {}
}