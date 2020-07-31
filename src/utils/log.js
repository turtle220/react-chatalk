const BUILD_MODE = 'DEVELOP';

const LOG = 1;
const WARNING = 2;
const ERROR = 4;

const LOG_LEVEL = BUILD_MODE === 'DEVELOP' ? LOG | WARNING | ERROR : 0;

export function log() {
    if (LOG_LEVEL & LOG) console.log(arguments);
}
export function error() {
    if (LOG_LEVEL & ERROR) console.error(arguments);
}
export function warn() {
    if (LOG_LEVEL & WARNING) console.warn(arguments);
}
