import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe("renders mini calculator",()=>{
    test('renders calculator body', () => {
        render(<App/>);
        const linkElement = screen.getAllByTestId('calculator');
        expect(linkElement.length).toBe(1);
      });

      test('renders calculator buttons',()=>{
        render(<App/>);
        const linkElement = screen.getAllByRole('button');
        expect(linkElement.length).toBe(5);
      });

      test('renders input fields',()=>{
        render(<App/>);
        const linkElement = screen.getAllByTestId(/number/i);
        expect(linkElement.length).toBe(2);
      });

      describe('calculator operations',()=>{
          test('addition',()=>{
            render(<App/>);
            const inputField1 = screen.getByTestId('number1');
            const inputField2 = screen.getByTestId('number2');
            const addButton = screen.getByTestId('add');
            fireEvent.change(inputField1,{target:{value:5}});
            fireEvent.change(inputField2,{target:{value:5}});
            fireEvent.click(addButton);
            const result = screen.getByTestId('result');
            expect(Number(result.textContent)).toBe(10);
          });

          test('subtraction',()=>{
            render(<App/>);
            const inputField1 = screen.getByTestId('number1');
            const inputField2 = screen.getByTestId('number2');
            const addButton = screen.getByTestId('subtract');
            fireEvent.change(inputField1,{target:{value:5}});
            fireEvent.change(inputField2,{target:{value:5}});
            fireEvent.click(addButton);
            const result = screen.getByTestId('result');
            expect(Number(result.textContent)).toBe(0);
          });

        test('multiplication',()=>{
            render(<App/>);
            const inputField1 = screen.getByTestId('number1');
            const inputField2 = screen.getByTestId('number2');
            const addButton = screen.getByTestId('multiply');
            fireEvent.change(inputField1,{target:{value:5}});
            fireEvent.change(inputField2,{target:{value:5}});
            fireEvent.click(addButton);
            const result = screen.getByTestId('result');
            expect(Number(result.textContent)).toBe(25);
        });

        describe('division',()=>{
            test('natural no division',()=>{
                render(<App/>);
                const inputField1 = screen.getByTestId('number1');
                const inputField2 = screen.getByTestId('number2');
                const addButton = screen.getByTestId('divide');
                fireEvent.change(inputField1,{target:{value:10}});
                fireEvent.change(inputField2,{target:{value:5}});
                fireEvent.click(addButton);
                const result = screen.getByTestId('result');
                expect(Number(result.textContent)).toBe(2);
            });
            test('when numerator is 0',()=>{
                render(<App/>);
                const inputField1 = screen.getByTestId('number1');
                const inputField2 = screen.getByTestId('number2');
                const addButton = screen.getByTestId('divide');
                fireEvent.change(inputField1,{target:{value:0}});
                fireEvent.change(inputField2,{target:{value:5}});
                fireEvent.click(addButton);
                const result = screen.getByTestId('result');
                expect(Number(result.textContent)).toBe(0);
            });
            test('when denominator is 0',()=>{
                render(<App/>);
                const inputField1 = screen.getByTestId('number1');
                const inputField2 = screen.getByTestId('number2');
                const addButton = screen.getByTestId('divide');
                fireEvent.change(inputField1,{target:{value:10}});
                fireEvent.change(inputField2,{target:{value:0}});
                fireEvent.click(addButton);
                const result = screen.getByTestId('result');
                expect(result.textContent).toBe('Infinity');
            });

            test('when numerator & denominator both are 0',()=>{
                render(<App/>);
                const inputField1 = screen.getByTestId('number1');
                const inputField2 = screen.getByTestId('number2');
                const addButton = screen.getByTestId('divide');
                fireEvent.change(inputField1,{target:{value:0}});
                fireEvent.change(inputField2,{target:{value:0}});
                fireEvent.click(addButton);
                const result = screen.getByTestId('result');
                expect(result.textContent).toBe('undefined');
            });
        });

        test('clear the fields',()=>{
            render(<App/>)
            const inputField1 = screen.getByTestId('number1');
            const inputField2 = screen.getByTestId('number2');
            const addButton = screen.getByTestId('clear');
            fireEvent.click(addButton);
            const result = screen.getByTestId('result');
            expect(Number(result.textContent)).toBe(0);
            expect(Number(inputField1.value)).toBe(0);
            expect(Number(inputField2.value)).toBe(0);
        });
      
    });


      
})


