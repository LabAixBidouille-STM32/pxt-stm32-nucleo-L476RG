// Auto-generated from simulator. Do not edit.
declare namespace robotdulab {
    /**
     * Moves the sprite forward
     * @param steps number of steps to move, eg: 1
     */
    //% weight=90
    //% block
    //% shim=robotdulab::forwardAsync promise
    function forward(steps: number): void;

    /**
     * Moves the sprite forward
     * @param direction the direction to turn, eg: Direction.Left
     * @param angle degrees to turn, eg:90
     */
    //% weight=85
    //% blockId=RobotDuLabTurn block="turn %direction|by %angle degrees"
    //% shim=robotdulab::turnAsync promise
    function turn(direction: Direction, angle: number): void;

}
declare namespace loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever"
    //% shim=loops::forever
    function forever(body: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    //% shim=loops::pauseAsync promise
    function pause(ms: number): void;

}
declare namespace console {
    /**
     * Print out message
     */
    //%
    //% shim=console::log
    function log(msg: string): void;

}
    /**
     * A ghost on the screen.
     */
    //%
    declare class Sprite {
        /**
         * The X-coordiante
         */
        //%
        //% shim=.x
        public x: number;

        /**
         * The Y-coordiante
         */
        //%
        //% shim=.y
        public y: number;

        /**
         * Move the thing forward
         */
        //%
        //% shim=.forwardAsync promise
        public forward(steps: number): void;

    }

// Auto-generated. Do not edit. Really.
