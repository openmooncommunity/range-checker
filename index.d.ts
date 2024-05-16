declare module 'range-checker' {
    /**
     * Check if a number is within a given range.
     * @param number The number to check.
     * @param options The options object.
     * @param options.start The start of the range. Default is 0.
     * @param options.end The end of the range.
     * @returns True if the number is within the range, false otherwise.
     */
    function isInRange(number: number | bigint, options: { start?: number | bigint, end: number | bigint }): boolean;

    export default isInRange;
}
