import { Pipe, PipeTransform } from '@angular/core';

/**
 * Numeric eninds pipe
 *
 * Example: {{ 1 | ngEnding: [ 'год', 'года', 'лет' ] }}
 *
 * Результат: 4 года, 1 год, 7 лет
 */
@Pipe({
    name: 'appEnding'
})
export class EndingPipe implements PipeTransform {
    public transform(digit: number = 0, endings: string[]): string {
        if (digit === null || isNaN(digit)) {

            return '';
        }

        const lastDigitOfNumber = +digit.toString()[digit.toString().length - 1];
        const cases = [2, 0, 1, 1, 1, 2];
        const ending = endings[
            (lastDigitOfNumber % 100 > 4 && lastDigitOfNumber % 100 < 20)
                ? 2
                : cases[(lastDigitOfNumber % 10 < 5)
                    ? lastDigitOfNumber % 10
                    : 5]
        ];

        return `${digit} ${ending}`;
    }
}
