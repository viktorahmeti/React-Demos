const generatedQuizzes = new Map();

export const mockFetch = (url, options) => {
    let data = null;

    if (url.startsWith('quiz')){
        const match = url.match(/\d+/);
        const quizId = parseInt(match[0], 10);
        
        if (generatedQuizzes.get(quizId)){
            return generatedQuizzes.get(quizId);
        }

        data = (new Array(10)).fill('What is').map(q => {
            const firstNumber = Math.floor(1 + Math.random() * 20);
            const secondNumber = Math.floor(1 + Math.random() * 20);
            const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];

            return `${q} ${firstNumber} ${operator} ${secondNumber}`;
        });

        generatedQuizzes.set(quizId, data);
    }
    else if (url.startsWith('validate')){
        const match = url.match(/\d+/);
        const quizId = parseInt(match[0], 10);
        const quiz = generatedQuizzes.get(quizId);
        
        if (!quiz){
            return null;
        }

        const answers = JSON.parse(options.body);

        const trueAnswers = quiz.map((q) => {
            let arr = q.substring(8).split(' ');
    
            let num1 = parseInt(arr[0]);
            let num2 = parseInt(arr[2]);
            let operator = arr[1];
    
            switch (operator){
                case '+':
                    return num1 + num2;
                case '-':
                    return num1 - num2;
                case '*':
                    return num1 * num2;
                case '/':
                    return num1 / num2;
            }
        });
    
        data = trueAnswers.map((a, i) => a == answers[i])
    }

    // Simulate a resolved Promise with dummy data
    return new Promise((resolve) => {
      const response = {
        json: () => Promise.resolve(data || { error: "Unknown endpoint" }),
        status: 200,
        ok: true,
      };
      resolve(response);
    });
};


  