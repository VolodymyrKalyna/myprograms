let correctCount = 0;
        let totalCount = 0;
        let correctAnswer = 0;
        let amount = 232;
        let start = 1;
        let num1 = 0;
        let listmis = document.getElementById('listmis')

        let saved = []
        let saved1 = []
        let pop = []

        let arrayused = 0

        let arraycontainer = 0
        let array1container = 0
        document.getElementById("answer").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                checkAnswer();
            }
        });
        document.getElementById("answer").addEventListener("keydown", function(event) {
            if (event.key === " ") {
                event.preventDefault();
                copy();
            }
        });

        function take1()
        {
            arrayused = 1
            array1container = arraycontainer
            arraycontainer = 0
            saved1 = saved
            saved = []
            nextTask()
            console.log(saved1)
            document.getElementById('listmis').textContent = ''

            correctCount = 0;
            totalCount = 0;
            correctAnswer = 0;
        }

        function tobegin()
        {
            arrayused = 0
            nextTask()
            document.getElementById('listmis').textContent = ''
            saved = []
            correctCount = 0;
            totalCount = 0;
            correctAnswer = 0;
        }

        function clearlist()
        {
            document.getElementById('listmis').textContent = ''
            saved = []
            arraycontainer = 0
        }

        function popmode()
        {
            arrayused = 2
            nextTask()
            document.getElementById('listmis').textContent = ''
            saved = []
            pop = []
            correctCount = 0;
            totalCount = 0;
            correctAnswer = 0;
        }
        

        function copy()
        {
            document.getElementById("answer").value = document.getElementById('task').textContent
        }

        function nextTask() {

            if(arrayused == 2)
            {
                num1 = Math.floor(Math.random() * amount) + start;
                for(i=0;i<pop.length;i++)
                {
                    if(pop.length == 232)
                        take1()
                    if(pop[i] == num1)
                    {
                        num1 = Math.floor(Math.random() * amount) + start;
                        i=0
                    }
                }
                pop.push(num1)
                console.log("pop:", pop)
            }

            if(arrayused == 0)
                num1 = Math.floor(Math.random() * amount) + start;

            if(arrayused == 1)
                num1 = saved1[Math.floor(Math.random() * array1container) + 0]
            switch(num1)
            {
                case 1: document.getElementById("task").innerText = 'агрономія';
                break
                case 2: document.getElementById("task").innerText = 'алфавіт';
                break
                case 3: document.getElementById("task").innerText = 'аркушик';
                break
                case 4: document.getElementById("task").innerText = 'асиметрія';
                break
                case 5: document.getElementById("task").innerText = 'багаторазовий';
                break
                case 6: document.getElementById("task").innerText = 'безпринципний';
                break
                case 7: document.getElementById("task").innerText = 'бешкет';
                break
                case 8: document.getElementById("task").innerText = 'благовіст';
                break
                case 9: document.getElementById("task").innerText = 'близький';
                break
                case 10: document.getElementById("task").innerText = 'болотистий';
                break
                case 11: document.getElementById("task").innerText = 'бородавка';
                break
                case 12: document.getElementById("task").innerText = 'босоніж';
                break
                case 13: document.getElementById("task").innerText = 'боязнь';
                break
                case 14: document.getElementById("task").innerText = 'бурштиновий';
                break
                case 15: document.getElementById("task").innerText = 'бюлетень';
                break
                case 16: document.getElementById("task").innerText = 'ваги';
                break
                case 17: document.getElementById("task").innerText = 'вантажівка';
                break
                case 18: document.getElementById("task").innerText = 'весняний';
                break
                case 19: document.getElementById("task").innerText = 'вигода(користь)';
                break
                case 20: document.getElementById("task").innerText = 'вигода(зручність)';
                break
                case 21: document.getElementById("task").innerText = 'видання';
                break
                case 22: document.getElementById("task").innerText = 'визвольний';
                break
                case 23: document.getElementById("task").innerText = 'вимога';
                break
                case 24: document.getElementById("task").innerText = 'випадок';
                break
                case 25: document.getElementById("task").innerText = 'виразний';
                break
                case 26: document.getElementById("task").innerText = 'висіти';
                break
                case 27: document.getElementById("task").innerText = 'витрата';
                break
                case 28: document.getElementById("task").innerText = 'вишиваний';
                break
                case 29: document.getElementById("task").innerText = 'відвезти';
                break
                case 30: document.getElementById("task").innerText = 'відвести';
                break
                case 31: document.getElementById("task").innerText = 'відгомін';
                break
                case 32: document.getElementById("task").innerText = 'віднести';
                break
                case 33: document.getElementById("task").innerText = 'відомість(список)';
                break
                case 34: document.getElementById("task").innerText = 'відомість(популярність)';
                break
                case 35: document.getElementById("task").innerText = 'вірші';
                break
                case 36: document.getElementById("task").innerText = 'віршовий';
                break
                case 37: document.getElementById("task").innerText = 'вітчим';
                break
                case 38: document.getElementById("task").innerText = 'гальмо';
                break
                case 39: document.getElementById("task").innerText = 'гальма';
                break
                case 40: document.getElementById("task").innerText = 'глядач';
                break
                case 41: document.getElementById("task").innerText = 'горошина';
                break
                case 42: document.getElementById("task").innerText = 'граблі';
                break
                case 43: document.getElementById("task").innerText = 'гуртожиток';
                break
                case 44: document.getElementById("task").innerText = 'данина';
                break
                case 45: document.getElementById("task").innerText = 'дано';
                break
                case 46: document.getElementById("task").innerText = 'дециметр';
                break
                case 47: document.getElementById("task").innerText = 'дещиця';
                break
                case 48: document.getElementById("task").innerText = 'де-юре';
                break
                case 49: document.getElementById("task").innerText = 'джерело';
                break
                case 50: document.getElementById("task").innerText = 'дивлячись';
                break
                case 51: document.getElementById("task").innerText = 'дичавіти';
                break
                case 52: document.getElementById("task").innerText = 'діалог';
                break
                case 53: document.getElementById("task").innerText = 'добовий';
                break
                case 54: document.getElementById("task").innerText = 'добуток';
                break
                case 55: document.getElementById("task").innerText = 'довезти';
                break
                case 56: document.getElementById("task").innerText = 'довести';
                break
                case 57: document.getElementById("task").innerText = 'довідник';
                break
                case 58: document.getElementById("task").innerText = 'догмат';
                break
                case 59: document.getElementById("task").innerText = 'донести';
                break
                case 60: document.getElementById("task").innerText = 'донька';
                break
                case 61: document.getElementById("task").innerText = 'дочка';
                break
                case 62: document.getElementById("task").innerText = 'дрова';
                break
                case 63: document.getElementById("task").innerText = 'експерт';
                break
                case 64: document.getElementById("task").innerText = 'єретик';
                break
                case 65: document.getElementById("task").innerText = 'жалюзі';
                break
                case 66: document.getElementById("task").innerText = 'завдання';
                break
                case 67: document.getElementById("task").innerText = 'завезти';
                break
                case 68: document.getElementById("task").innerText = 'завести';
                break
                case 69: document.getElementById("task").innerText = 'завжди';
                break
                case 70: document.getElementById("task").innerText = 'завчасу';
                break
                case 71: document.getElementById("task").innerText = 'загадка';
                break
                case 72: document.getElementById("task").innerText = 'заіржавіти';
                break
                case 73: document.getElementById("task").innerText = 'закінчити';
                break
                case 74: document.getElementById("task").innerText = 'закладка';
                break
                case 75: document.getElementById("task").innerText = 'закрутка';
                break
                case 76: document.getElementById("task").innerText = 'залишити';
                break
                case 77: document.getElementById("task").innerText = 'заміжня';
                break
                case 78: document.getElementById("task").innerText = 'занести';
                break
                case 79: document.getElementById("task").innerText = 'запонка';
                break
                case 80: document.getElementById("task").innerText = 'заробіток';
                break
                case 81: document.getElementById("task").innerText = 'заставка';
                break
                case 82: document.getElementById("task").innerText = 'застібка';
                break
                case 83: document.getElementById("task").innerText = 'застопорити';
                break
                case 84: document.getElementById("task").innerText = 'звисока';
                break
                case 85: document.getElementById("task").innerText = 'здалека';
                break
                case 86: document.getElementById("task").innerText = 'зібрання';
                break
                case 87: document.getElementById("task").innerText = 'зобразити';
                break
                case 88: document.getElementById("task").innerText = 'зозла';
                break
                case 89: document.getElementById("task").innerText = 'зрання';
                break
                case 90: document.getElementById("task").innerText = 'зручний';
                break
                case 91: document.getElementById("task").innerText = 'зубожіння';
                break
                case 92: document.getElementById("task").innerText = 'індустрія';
                break
                case 93: document.getElementById("task").innerText = 'камбала';
                break
                case 94: document.getElementById("task").innerText = 'каталог';
                break
                case 95: document.getElementById("task").innerText = 'квартал';
                break
                case 96: document.getElementById("task").innerText = 'кишка';
                break
                case 97: document.getElementById("task").innerText = 'кілометр';
                break
                case 98: document.getElementById("task").innerText = 'кінчити';
                break
                case 99: document.getElementById("task").innerText = 'колесо';
                break
                case 100: document.getElementById("task").innerText = 'колія';
                break
                case 101: document.getElementById("task").innerText = 'копчений(дієприкметник)';
                break
                case 102: document.getElementById("task").innerText = 'копчений(прикметник)';
                break
                case 103: document.getElementById("task").innerText = 'корисний';
                break
                case 104: document.getElementById("task").innerText = 'косий';
                break
                case 105: document.getElementById("task").innerText = 'котрий';
                break
                case 106: document.getElementById("task").innerText = 'крицевий';
                break
                case 107: document.getElementById("task").innerText = 'кроїти';
                break
                case 108: document.getElementById("task").innerText = 'кропива';
                break
                case 109: document.getElementById("task").innerText = 'кулінарія';
                break
                case 110: document.getElementById("task").innerText = 'курятина';
                break
                case 111: document.getElementById("task").innerText = 'лате';
                break
                case 112: document.getElementById("task").innerText = 'листопад';
                break
                case 113: document.getElementById("task").innerText = 'літопис';
                break
                case 114: document.getElementById("task").innerText = 'лютро';
                break
                case 115: document.getElementById("task").innerText = 'мабуть';
                break
                case 116: document.getElementById("task").innerText = 'магістерський';
                break
                case 117: document.getElementById("task").innerText = 'маркетинг';
                break
                case 118: document.getElementById("task").innerText = 'мережа';
                break
                case 119: document.getElementById("task").innerText = 'металургія';
                break
                case 120: document.getElementById("task").innerText = 'міліметр';
                break
                case 121: document.getElementById("task").innerText = 'навчання';
                break
                case 122: document.getElementById("task").innerText = 'нанести';
                break
                case 123: document.getElementById("task").innerText = 'напій';
                break
                case 124: document.getElementById("task").innerText = 'наскрізний';
                break
                case 125: document.getElementById("task").innerText = 'начинка';
                break
                case 126: document.getElementById("task").innerText = 'ненавидіти';
                break
                case 127: document.getElementById("task").innerText = 'ненависний';
                break
                case 128: document.getElementById("task").innerText = 'ненависть';
                break
                case 129: document.getElementById("task").innerText = 'нести';
                break
                case 130: document.getElementById("task").innerText = 'ніздря';
                break
                case 131: document.getElementById("task").innerText = 'новий';
                break
                case 132: document.getElementById("task").innerText = 'обіцянка';
                break
                case 133: document.getElementById("task").innerText = 'обрання';
                break
                case 134: document.getElementById("task").innerText = 'обруч';
                break
                case 135: document.getElementById("task").innerText = 'одинадцять';
                break
                case 136: document.getElementById("task").innerText = 'одноразовий';
                break
                case 137: document.getElementById("task").innerText = 'ознака';
                break
                case 138: document.getElementById("task").innerText = 'олень';
                break
                case 139: document.getElementById("task").innerText = 'оптовий';
                break
                case 140: document.getElementById("task").innerText = 'осетер';
                break
                case 141: document.getElementById("task").innerText = 'отаман';
                break
                case 142: document.getElementById("task").innerText = 'оцет';
                break
                case 143: document.getElementById("task").innerText = 'павич';
                break
                case 144: document.getElementById("task").innerText = 'партер';
                break
                case 145: document.getElementById("task").innerText = 'пекарський';
                break
                case 146: document.getElementById("task").innerText = 'перевезти';
                break
                case 147: document.getElementById("task").innerText = 'перевести';
                break
                case 148: document.getElementById("task").innerText = 'перекис';
                break
                case 149: document.getElementById("task").innerText = 'переляк';
                break
                case 150: document.getElementById("task").innerText = 'перенести';
                break
                case 151: document.getElementById("task").innerText = 'перепад';
                break
                case 152: document.getElementById("task").innerText = 'перепис';
                break
                case 153: document.getElementById("task").innerText = 'піала';
                break
                case 154: document.getElementById("task").innerText = 'підданий(дієприкметник)';
                break
                case 155: document.getElementById("task").innerText = 'підданий(іменник)';
                break
                case 156: document.getElementById("task").innerText = 'підлітковий';
                break
                case 157: document.getElementById("task").innerText = 'пізнання';
                break
                case 158: document.getElementById("task").innerText = 'пітний';
                break
                case 159: document.getElementById("task").innerText = 'піцерія';
                break
                case 160: document.getElementById("task").innerText = 'подруга';
                break
                case 161: document.getElementById("task").innerText = 'позначка';
                break
                case 162: document.getElementById("task").innerText = 'помилка';
                break
                case 163: document.getElementById("task").innerText = 'поміщик';
                break
                case 164: document.getElementById("task").innerText = 'помовчати';
                break
                case 165: document.getElementById("task").innerText = 'поняття';
                break
                case 166: document.getElementById("task").innerText = 'порядковий';
                break
                case 167: document.getElementById("task").innerText = 'посередині';
                break
                case 168: document.getElementById("task").innerText = 'привезти';
                break
                case 169: document.getElementById("task").innerText = 'привести';
                break
                case 170: document.getElementById("task").innerText = 'приморозок';
                break
                case 171: document.getElementById("task").innerText = 'принести';
                break
                case 172: document.getElementById("task").innerText = 'причіп';
                break
                case 173: document.getElementById("task").innerText = 'проділ';
                break
                case 174: document.getElementById("task").innerText = 'проміжок';
                break
                case 175: document.getElementById("task").innerText = 'псевдонім';
                break
                case 176: document.getElementById("task").innerText = 'разом';
                break
                case 177: document.getElementById("task").innerText = 'ремінь';
                break
                case 178: document.getElementById("task").innerText = 'решето';
                break
                case 179: document.getElementById("task").innerText = 'ринковий';
                break
                case 180: document.getElementById("task").innerText = 'рівнина';
                break
                case 181: document.getElementById("task").innerText = 'роздрібний';
                break
                case 182: document.getElementById("task").innerText = 'розпірка';
                break
                case 183: document.getElementById("task").innerText = 'рукопис';
                break
                case 184: document.getElementById("task").innerText = 'русло';
                break
                case 185: document.getElementById("task").innerText = 'сантиметр';
                break
                case 186: document.getElementById("task").innerText = 'свердло';
                break
                case 187: document.getElementById("task").innerText = 'середина';
                break
                case 188: document.getElementById("task").innerText = 'сеча';
                break
                case 189: document.getElementById("task").innerText = 'симетрія';
                break
                case 190: document.getElementById("task").innerText = 'сільськогосподарський';
                break
                case 191: document.getElementById("task").innerText = 'сімдесят';
                break
                case 192: document.getElementById("task").innerText = 'слина';
                break
                case 193: document.getElementById("task").innerText = 'соломинка';
                break
                case 194: document.getElementById("task").innerText = 'статуя';
                break
                case 195: document.getElementById("task").innerText = 'стовідсотковий';
                break
                case 196: document.getElementById("task").innerText = 'стрибати';
                break
                case 197: document.getElementById("task").innerText = 'текстовий';
                break
                case 198: document.getElementById("task").innerText = 'течія';
                break
                case 199: document.getElementById("task").innerText = 'тигровий';
                break
                case 200: document.getElementById("task").innerText = 'тисовий';
                break
                case 201: document.getElementById("task").innerText = 'тім’яний';
                break
                case 202: document.getElementById("task").innerText = 'травестія';
                break
                case 203: document.getElementById("task").innerText = 'тризуб';
                break
                case 204: document.getElementById("task").innerText = 'тулуб';
                break
                case 205: document.getElementById("task").innerText = 'український';
                break
                case 206: document.getElementById("task").innerText = 'уподобання';
                break
                case 207: document.getElementById("task").innerText = 'урочистий';
                break
                case 208: document.getElementById("task").innerText = 'усередині';
                break
                case 209: document.getElementById("task").innerText = 'фартух';
                break
                case 210: document.getElementById("task").innerText = 'фаховий';
                break
                case 211: document.getElementById("task").innerText = 'феномен';
                break
                case 212: document.getElementById("task").innerText = 'фольга';
                break
                case 213: document.getElementById("task").innerText = 'форзац';
                break
                case 214: document.getElementById("task").innerText = 'хаос(у міфології)';
                break
                case 215: document.getElementById("task").innerText = 'хаос(безлад)';
                break
                case 216: document.getElementById("task").innerText = 'царина';
                break
                case 217: document.getElementById("task").innerText = 'цемент';
                break
                case 218: document.getElementById("task").innerText = 'центнер';
                break
                case 219: document.getElementById("task").innerText = 'цінник';
                break
                case 220: document.getElementById("task").innerText = 'чарівний';
                break
                case 221: document.getElementById("task").innerText = 'черговий';
                break
                case 222: document.getElementById("task").innerText = 'читання';
                break
                case 223: document.getElementById("task").innerText = 'чорнозем';
                break
                case 224: document.getElementById("task").innerText = 'чорнослив';
                break
                case 225: document.getElementById("task").innerText = 'чотирнадцять';
                break
                case 226: document.getElementById("task").innerText = 'шляхопровід';
                break
                case 227: document.getElementById("task").innerText = 'шовковий';
                break
                case 228: document.getElementById("task").innerText = 'шофер';
                break
                case 229: document.getElementById("task").innerText = 'щелепа';
                break
                case 230: document.getElementById("task").innerText = 'щипці';
                break
                case 231: document.getElementById("task").innerText = 'щодобовий';
                break
                case 232: document.getElementById("task").innerText = 'ярмарковий';
                break
                
            }
            document.getElementById("answer").value = '';
        }

        function checkAnswer() {
            const userAnswer = document.getElementById("answer").value;
            totalCount++;

            
            switch(num1)
            {
                case 1:
                    if((userAnswer == 'агронОмія') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь «агронОмія»`;
                        listmis.textContent += ' ' + 'агронОмія'
                        
                    }
                    break
                case 2:
                    if((userAnswer == 'алфАвіт') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь алфАвіт`;
                        listmis.textContent += ' ' + 'алфАвіт'
                    }
                    break
                case 3:
                    if((userAnswer == 'Аркушик') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь Аркушик`;
                        listmis.textContent += ' ' + 'Аркушик'
                    }
                    break
                case 4:
                    if((userAnswer == 'асиметрІя') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь асиметрІя`;
                        listmis.textContent += ' ' + 'асиметрІя'
                    }
                    break
                case 5:
                    if((userAnswer == 'багаторазОвий') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь багаторазОвий`;
                        listmis.textContent += ' ' + 'багаторазОвий'
                    }
                    break
                case 6:
                    if((userAnswer == 'безпринцИпний') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь безпринцИпний`;
                        listmis.textContent += ' ' + 'безпринцИпний'
                    }
                    break
                case 7:
                    if((userAnswer == 'бЕшкет') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь бЕшкет`;
                        listmis.textContent += ' ' + 'бЕшкет'
                    }
                    break
                case 8:
                    if((userAnswer == 'блАговіст') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь блАговіст`;
                        listmis.textContent += ' ' + 'блАговіст'
                    }
                    break
                case 9:
                    if((userAnswer == 'близькИй') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь близькИй`;
                        listmis.textContent += ' ' + 'близькИй'
                    }
                    break
                case 10:
                    if((userAnswer == 'болотИстий') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь болотИстий`;
                        listmis.textContent += ' ' + 'болотИстий'
                    }
                    break
                case 11:
                    if((userAnswer == 'борОдавка') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь борОдавка`;
                        listmis.textContent += ' ' + 'борОдавка'
                    }
                    break
                case 12:
                    if((userAnswer == 'босОніж') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь босОніж`;
                        listmis.textContent += ' ' + 'босОніж'
                    }
                    break

                case 13:
                    if((userAnswer == 'боЯзнь') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь боЯзнь`;
                        listmis.textContent += ' ' + 'боЯзнь'
                    }
                    break
                case 14:
                    if((userAnswer == 'бурштинОвий') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь бурштинОвий`;
                        listmis.textContent += ' ' + 'бурштинОвий'
                    }
                    break
                case 15:
                    if((userAnswer == 'бюлетЕнь') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь бюлетЕнь`;
                        listmis.textContent += ' ' + 'бюлетЕнь'
                    }
                    break
                case 16:
                    if((userAnswer == 'вАги') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь вАги`;
                        listmis.textContent += ' ' + 'вАги'
                    }
                    break
                case 17:
                    if((userAnswer == 'вантажІвка') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь вантажІвка`;
                        listmis.textContent += ' ' + 'вантажІвка'
                    }
                    break
                case 18:
                    if((userAnswer == 'веснЯнИй') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь веснЯнИй`;
                        listmis.textContent += ' ' + 'веснЯнИй'
                    }
                    break
                case 19:
                    if((userAnswer == 'вИгода') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь вИгода`;
                        listmis.textContent += ' ' + 'вИгода'
                    }
                    break
                case 20:
                    if((userAnswer == 'вигОда') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь виГода`;
                        listmis.textContent += ' ' + 'вигОда'
                    }
                    break
                case 21:
                    if((userAnswer == 'видАння') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь видАння`;
                        listmis.textContent += ' ' + 'видАння'
                    }
                    break
                case 22:
                    if((userAnswer == 'визвОльний') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь визвОльний`;
                        listmis.textContent += ' ' + 'визвОльний'
                    }
                    break
                case 23:
                    if((userAnswer == 'вимОга') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь вимОга`;
                        listmis.textContent += ' ' + 'вимОга'
                    }
                    break
                case 24:
                    if((userAnswer == 'вИпадок') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь вИпадок`;
                        listmis.textContent += ' ' + 'вИпадок'
                    }
                    break
                case 25:
                    if((userAnswer == 'вирАзний') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь вирАзний`;
                        listmis.textContent += ' ' + 'вирАзний'
                    }
                    break
                case 26:
                    if((userAnswer == 'вИсіти') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь вИсіти`;
                        listmis.textContent += ' ' + 'вИсіти'
                    }
                    break
                case 27:
                    if((userAnswer == 'вИтрата') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь вИтрата`;
                        listmis.textContent += ' ' + 'вИтрата'
                    }
                    break
                case 28:
                    if((userAnswer == 'вишИваний') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь вишИваний`;
                        listmis.textContent += ' ' + 'вишИваний'
                    }
                    break
                case 29:
                    if((userAnswer == 'відвезтИ') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь відвезтИ`;
                        listmis.textContent += ' ' + 'відвезтИ'
                    }
                    break
                case 30:
                    if((userAnswer == 'відвестИ') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь відвестИ`;
                        listmis.textContent += ' ' + 'відвестИ'
                    }
                    break
                case 31:
                    if((userAnswer == 'вІдгомін') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь вІдгомін`;
                        listmis.textContent += ' ' + 'вІдгомін'
                    }
                    break
                case 32:
                    if((userAnswer == 'віднестИ') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь віднестИ`;
                        listmis.textContent += ' ' + 'віднестИ'
                    }
                    break
                case 33:
                    if((userAnswer == 'вІдомість') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь вІдомість`;
                        listmis.textContent += ' ' + 'вІдомість'
                    }
                    break
                case 34:
                    if((userAnswer == 'відОмість') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь відОмість`;
                        listmis.textContent += ' ' + 'відОмість'
                    }
                    break
                case 35:
                    if((userAnswer == 'вІрші') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь вІрші`;
                        listmis.textContent += ' ' + 'вІрші'
                    }
                    break
                case 36:
                    if((userAnswer == 'віршовИй') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь віршовИй`;
                        listmis.textContent += ' ' + 'віршовИй'
                    }
                    break

                case 37:
                    if((userAnswer == 'вітчИм') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь вітчИм`;
                        listmis.textContent += ' ' + 'вітчИм'
                    }
                    break
                case 38:
                    if((userAnswer == 'гальмО') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь гальмО`;
                        listmis.textContent += ' ' + 'гальмО'
                    }
                    break
                case 39:
                    if((userAnswer == 'гАльма') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь гАльма`;
                        listmis.textContent += ' ' + 'гАльма'
                    }
                    break
                case 40:
                    if((userAnswer == 'глядАч') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь глядАч`;
                        listmis.textContent += ' ' + 'глядАч'
                    }
                    break
                case 41:
                    if((userAnswer == 'горошИна') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь горошИна`;
                        listmis.textContent += ' ' + 'горошИна'
                    }
                    break
                case 42:
                    if((userAnswer == 'граблІ') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь граблІ`;
                        listmis.textContent += ' ' + 'граблІ'
                    }
                    break
                case 43:
                    if((userAnswer == 'гуртОжиток') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь гуртОжиток`;
                        listmis.textContent += ' ' + 'гуртОжиток'
                    }
                    break
                case 44:
                    if((userAnswer == 'данИна') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь данИна`;
                        listmis.textContent += ' ' + 'данИна'
                    }
                    break
                case 45:
                    if((userAnswer == 'дАно') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь дАно`;
                        listmis.textContent += ' ' + 'дАно'
                    }
                    break
                case 46:
                    if((userAnswer == 'децимЕтр') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь децимЕтр`;
                        listmis.textContent += ' ' + 'децимЕтр'
                    }
                    break
                case 47:
                    if((userAnswer == 'дЕщиця') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь дЕщиця`;
                        listmis.textContent += ' ' + 'дЕщиця'
                    }
                    break
                case 48:
                    if((userAnswer == 'де-Юре') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь де-Юре`;
                        listmis.textContent += ' ' + 'де-Юре'
                    }
                    break
                case 49:
                    if((userAnswer == 'джерелО') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь джерелО`;
                        listmis.textContent += ' ' + 'джерелО'
                    }
                    break
                case 50:
                    if((userAnswer == 'дИвлячись') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь дИвлячись`;
                        listmis.textContent += ' ' + 'дИвлячись'
                    }
                    break
                case 51:
                    if((userAnswer == 'дичАвіти') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь дичАвіти`;
                        listmis.textContent += ' ' + 'дичАвіти'
                    }
                    break
                case 52:
                    if((userAnswer == 'діалОг') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь діалОг`;
                        listmis.textContent += ' ' + 'діалОг'
                    }
                    break
                case 53:
                    if((userAnswer == 'добовИй') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь добовИй`;
                        listmis.textContent += ' ' + 'добовИй'
                    }
                    break
                case 54:
                    if((userAnswer == 'добУток') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь добУток`;
                        listmis.textContent += ' ' + 'добУток'
                    }
                    break
                case 55:
                    if((userAnswer == 'довезтИ') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь довезтИ`;
                        listmis.textContent += ' ' + 'довезтИ'
                    }
                    break
                case 56:
                    if((userAnswer == 'довестИ') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь довестИ`;
                        listmis.textContent += ' ' + 'довестИ'
                    }
                    break
                case 57:
                    if((userAnswer == 'довІдник') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь довІдник`;
                        listmis.textContent += ' ' + 'довІдник'
                    }
                    break
                case 58:
                    if((userAnswer == 'дОгмат') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь дОгмат`;
                        listmis.textContent += ' ' + 'дОгмат'
                    }
                    break
                case 59:
                    if((userAnswer == 'донестИ') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь донестИ`;
                        listmis.textContent += ' ' + 'донестИ'
                    }
                    break
                case 60:
                    if((userAnswer == 'дОнька') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь дОнька`;
                        listmis.textContent += ' ' + 'дОнька'
                    }
                    break

                case 61:
                    if((userAnswer == 'дочкА') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь дочкА`;
                        listmis.textContent += ' ' + 'дочкА'
                    }
                    break
                case 62:
                    if((userAnswer == 'дрОва') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь дрОва`;
                        listmis.textContent += ' ' + 'дрОва'
                    }
                    break
                case 63:
                    if((userAnswer == 'експЕрт') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь експЕрт`;
                        listmis.textContent += ' ' + 'експЕрт'
                    }
                    break
                case 64:
                    if((userAnswer == 'єретИк') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь єретИк`;
                        listmis.textContent += ' ' + 'єретИк'
                    }
                    break
                case 65:
                    if((userAnswer == 'жалюзІ') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь жалюзІ`;
                        listmis.textContent += ' ' + 'жалюзІ'
                    }
                    break
                case 66:
                    if((userAnswer == 'завдАння') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь завдАння`;
                        listmis.textContent += ' ' + 'завдАння'
                    }
                    break
                case 67:
                    if((userAnswer == 'завезтИ') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь завезтИ`;
                        listmis.textContent += ' ' + 'завезтИ'
                    }
                    break
                case 68:
                    if((userAnswer == 'завестИ') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь завестИ`;
                        listmis.textContent += ' ' + 'завестИ'
                    }
                    break
                case 69:
                    if((userAnswer == 'зАвжди') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь зАвжди`;
                        listmis.textContent += ' ' + 'зАвжди'
                    }
                    break
                case 70:
                    if((userAnswer == 'завчасУ') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь завчасУ`;
                        listmis.textContent += ' ' + 'завчасУ'
                    }
                    break
                case 71:
                    if((userAnswer == 'зАгадка') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь зАгадка`;
                        listmis.textContent += ' ' + 'зАгадка'
                    }
                    break
                case 72:
                    if((userAnswer == 'заіржАвіти') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь заіржАвіти`;
                        listmis.textContent += ' ' + 'заіржАвіти'
                    }
                    break
                case 73:
                    if((userAnswer == 'закінчИти') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь закінчИти`;
                        listmis.textContent += ' ' + 'закінчИти'
                    }
                    break
                case 74:
                    if((userAnswer == 'зАкладка') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь зАкладка`;
                        listmis.textContent += ' ' + 'зАкладка'
                    }
                    break
                case 75:
                    if((userAnswer == 'зАкрутка') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь зАкрутка`;
                        listmis.textContent += ' ' + 'зАкрутка'
                    }
                    break
                case 76:
                    if((userAnswer == 'залишИти') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь залишИти`;
                        listmis.textContent += ' ' + 'залишИти'
                    }
                    break
                case 77:
                    if((userAnswer == 'замІжня') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь замІжня`;
                        listmis.textContent += ' ' + 'замІжня'
                    }
                    break
                case 78:
                    if((userAnswer == 'занестИ') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь занестИ`;
                        listmis.textContent += ' ' + 'занестИ'
                    }
                    break
                case 79:
                    if((userAnswer == 'зАпонка') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь зАпонка`;
                        listmis.textContent += ' ' + 'зАпонка'
                    }
                    break
                case 80:
                    if((userAnswer == 'заробІток') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь заробІток`;
                        listmis.textContent += ' ' + 'заробІток'
                    }
                    break
                case 81:
                    if((userAnswer == 'зАставка') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь зАставка`;
                        listmis.textContent += ' ' + 'зАставка'
                    }
                    break
                case 82:
                    if((userAnswer == 'зАстібка') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь зАстібка`;
                        listmis.textContent += ' ' + 'зАстібка'
                    }
                    break
                case 83:
                    if((userAnswer == 'застОпорити') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь застОпорити`;
                        listmis.textContent += ' ' + 'застОпорити'
                    }
                    break
                case 84:
                    if((userAnswer == 'звИсока') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь звИсока`;
                        listmis.textContent += ' ' + 'звИсока'
                    }
                    break
                case 85:
                    if((userAnswer == 'здАлека') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь здАлека`;
                        listmis.textContent += ' ' + 'здАлека'
                    }
                    break
                case 86:
                    if((userAnswer == 'зібрАння') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь зібрАння`;
                        listmis.textContent += ' ' + 'зібрАння'
                    }
                    break
                case 87:
                    if((userAnswer == 'зобразИти') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь зобразИти`;
                        listmis.textContent += ' ' + 'зобразИти'
                    }
                    break
                case 88:
                    if((userAnswer == 'зОзла') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь зОзла`;
                        listmis.textContent += ' ' + 'зОзла'
                    }
                    break
                case 89:
                    if((userAnswer == 'зрАння') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь зрАння`;
                        listmis.textContent += ' ' + 'зрАння'
                    }
                    break
                case 90:
                    if((userAnswer == 'зрУчний') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь зрУчний`;
                        listmis.textContent += ' ' + 'зрУчний'
                    }
                    break
                case 91:
                    if((userAnswer == 'зубОжіння') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь зубОжіння`;
                        listmis.textContent += ' ' + 'зубОжіння'
                    }
                    break
                case 92:
                    if((userAnswer == 'індУстрія') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь індУстрія`;
                        listmis.textContent += ' ' + 'індУстрія'
                    }
                    break
                case 93:
                    if((userAnswer == 'кАмбала') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь кАмбала`;
                        listmis.textContent += ' ' + 'кАмбала'
                    }
                    break
                case 94:
                    if((userAnswer == 'каталОг') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь каталОг`;
                        listmis.textContent += ' ' + 'каталОг'
                    }
                    break
                case 95:
                    if((userAnswer == 'квартАл') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь квартАл`;
                        listmis.textContent += ' ' + 'квартАл'
                    }
                    break
                case 96:
                    if((userAnswer == 'кИшка') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь кИшка`;
                        listmis.textContent += ' ' + 'кИшка'
                    }
                    break
                case 97:
                    if((userAnswer == 'кіломЕтр') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь кіломЕтр`;
                        listmis.textContent += ' ' + 'кіломЕтр'
                    }
                    break
                case 98:
                    if((userAnswer == 'кінчИти') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь кінчИти`;
                        listmis.textContent += ' ' + 'кінчИти'
                    }
                    break
                case 99:
                    if((userAnswer == 'кОлесо') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь кОлесо`;
                        listmis.textContent += ' ' + 'кОлесо'
                    }
                    break
                case 100:
                    if((userAnswer == 'кОлія') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь кОлія`;
                        listmis.textContent += ' ' + 'кОлія'
                    }
                    break
                case 101:
                    if((userAnswer == 'кОпчений') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь кОпчений`;
                        listmis.textContent += ' ' + 'кОпчений'
                    }
                    break
                case 102:
                    if((userAnswer == 'копчЕний') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь копчЕний`;
                        listmis.textContent += ' ' + 'копчЕний'
                    }
                    break
                case 103:
                    if((userAnswer == 'корИсний') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь корИсний`;
                        listmis.textContent += ' ' + 'корИсний'
                    }
                    break
                case 104:
                    if((userAnswer == 'кОсий') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь кОсий`;
                        listmis.textContent += ' ' + 'кОсий'
                    }
                    break
                case 105:
                    if((userAnswer == 'котрИй') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь котрИй`;
                        listmis.textContent += ' ' + 'котрИй'
                    }
                    break
                case 106:
                    if((userAnswer == 'крицЕвий') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь крицЕвий`;
                        listmis.textContent += ' ' + 'крицЕвий'
                    }
                    break
                case 107:
                    if((userAnswer == 'крОїти') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь крОїти`;
                        listmis.textContent += ' ' + 'крОїти'
                    }
                    break
                case 108:
                    if((userAnswer == 'кропивА') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь кропивА`;
                        listmis.textContent += ' ' + 'кропивА'
                    }
                    break
                case 109:
                    if((userAnswer == 'кулінАрія') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь кулінАрія`;
                        listmis.textContent += ' ' + 'кулінАрія'
                    }
                    break
                case 110:
                    if((userAnswer == 'кУрятина') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь кУрятина`;
                        listmis.textContent += ' ' + 'кУрятина'
                    }
                    break
                case 111:
                    if((userAnswer == 'лАте') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь лАте`;
                        listmis.textContent += ' ' + 'лАте'
                    }
                    break
                case 112:
                    if((userAnswer == 'листопАд') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь листопАд`;
                        listmis.textContent += ' ' + 'листопАд'
                    }
                    break

                case 113:
                    if((userAnswer == 'літОпис') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь літОпис`;
                        listmis.textContent += ' ' + 'літОпис'
                    }
                    break
                case 114:
                    if((userAnswer == 'лЮтро') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь лЮтро`;
                        listmis.textContent += ' ' + 'лЮстро'
                    }
                    break
                case 115:
                    if((userAnswer == 'мАбУть') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь мАбУть`;
                        listmis.textContent += ' ' + 'мАбУть'
                    }
                    break
                case 116:
                    if((userAnswer == 'магістЕрський') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь магістЕрський`;
                        listmis.textContent += ' ' + 'магістЕрський'
                    }
                    break
                case 117:
                    if((userAnswer == 'мАркетинг') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь мАркетинг`;
                        listmis.textContent += ' ' + 'мАркетинг'
                    }
                    break
                case 118:
                    if((userAnswer == 'мерЕжа') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь мерЕжа`;
                        listmis.textContent += ' ' + 'мерЕжа'
                    }
                    break
                case 119:
                    if((userAnswer == 'металУргія') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь металУргія`;
                        listmis.textContent += ' ' + 'металУргія'
                    }
                    break
                case 120:
                    if((userAnswer == 'мілімЕтр') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь мілімЕтр`;
                        listmis.textContent += ' ' + 'мілімЕтр'
                    }
                    break
                case 121:
                    if((userAnswer == 'навчАння') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь навчАння`;
                        listmis.textContent += ' ' + 'навчАння'
                    }
                    break
                case 122:
                    if((userAnswer == 'нанестИ') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь нанестИ`;
                        listmis.textContent += ' ' + 'нанестИ'
                    }
                    break
                case 123:
                    if((userAnswer == 'напІй') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь напІй`;
                        listmis.textContent += ' ' + 'напІй'
                    }
                    break
                case 124:
                    if((userAnswer == 'нАскрізний') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь нАскрізний`;
                        listmis.textContent += ' ' + 'нАскрізний'
                    }
                    break
                case 125:
                    if((userAnswer == 'нАчинка') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь нАчинка`;
                        listmis.textContent += ' ' + 'нАчинка'
                    }
                    break
                case 126:
                    if((userAnswer == 'ненАвидіти') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь ненАвидіти`;
                        listmis.textContent += ' ' + 'ненАвидіти'
                    }
                    break
                case 127:
                    if((userAnswer == 'ненАвисний') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь ненАвисний`;
                        listmis.textContent += ' ' + 'ненАвисний'
                    }
                    break
                case 128:
                    if((userAnswer == 'ненАвисть') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь ненАвисть`;
                        listmis.textContent += ' ' + 'ненАвисть'
                    }
                    break
                case 129:
                    if((userAnswer == 'нестИ') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь нестИ`;
                        listmis.textContent += ' ' + 'нестИ'
                    }
                    break
                case 130:
                    if((userAnswer == 'нІздря') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь нІздря`;
                        listmis.textContent += ' ' + 'нІздря'
                    }
                    break
                case 131:
                    if((userAnswer == 'новИй') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь новИй`;
                        listmis.textContent += ' ' + 'новИй'
                    }
                    break
                case 132:
                    if((userAnswer == 'обіцЯнка') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь обіцЯнка`;
                        listmis.textContent += ' ' + 'обіцЯнка'
                    }
                    break
                case 133:
                    if((userAnswer == 'обрАння') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь обрАння`;
                        listmis.textContent += ' ' + 'обрАння'
                    }
                    break
                case 134:
                    if((userAnswer == 'обрУч') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь обрУч`;
                        listmis.textContent += ' ' + 'обрУч'
                    }
                    break
                case 135:
                    if((userAnswer == 'одинАдцять') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь одинАдцять`;
                        listmis.textContent += ' ' + 'одинАдцять'
                    }
                    break
                case 136:
                    if((userAnswer == 'одноразОвий') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь одноразОвий`;
                        listmis.textContent += ' ' + 'одноразОвий'
                    }
                    break

                case 137:
                    if((userAnswer == 'ознАка') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь ознАка`;
                        listmis.textContent += ' ' + 'ознАка'
                    }
                    break
                case 138:
                    if((userAnswer == 'Олень') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь Олень`;
                        listmis.textContent += ' ' + 'Олень'
                    }
                    break
                case 139:
                    if((userAnswer == 'оптОвий') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь оптОвий`;
                        listmis.textContent += ' ' + 'оптОвий'
                    }
                    break
                case 140:
                    if((userAnswer == 'осетЕр') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь осетЕр`;
                        listmis.textContent += ' ' + 'осетЕр'
                    }
                    break
                case 141:
                    if((userAnswer == 'отАман') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь отАман`;
                        listmis.textContent += ' ' + 'отАман'
                    }
                    break
                case 142:
                    if((userAnswer == 'Оцет') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь Оцет`;
                        listmis.textContent += ' ' + 'Оцет'
                    }
                    break
                case 143:
                    if((userAnswer == 'павИч') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь павИч`;
                        listmis.textContent += ' ' + 'павИч'
                    }
                    break
                case 144:
                    if((userAnswer == 'партЕр') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь партЕр`;
                        listmis.textContent += ' ' + 'партЕр'
                    }
                    break
                case 145:
                    if((userAnswer == 'пЕкарський') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь пЕкарський`;
                        listmis.textContent += ' ' + 'пЕкарський'
                    }
                    break
                case 146:
                    if((userAnswer == 'перевезтИ') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь перевезтИ`;
                        listmis.textContent += ' ' + 'перевезтИ'
                    }
                    break
                case 147:
                    if((userAnswer == 'перевестИ') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь перевестИ`;
                        listmis.textContent += ' ' + 'перевестИ'
                    }
                    break
                case 148:
                    if((userAnswer == 'перЕкис') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь перЕкис`;
                        listmis.textContent += ' ' + 'перЕкис'
                    }
                    break
                case 149:
                    if((userAnswer == 'перелЯк') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь перелЯк`;
                        listmis.textContent += ' ' + 'перелЯк'
                    }
                    break
                case 150:
                    if((userAnswer == 'перенестИ') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь перенестИ`;
                        listmis.textContent += ' ' + 'перенестИ'
                    }
                    break
                case 151:
                    if((userAnswer == 'перЕпад') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь перЕпад`;
                        listmis.textContent += ' ' + 'перЕпад'
                    }
                    break
                case 152:
                    if((userAnswer == 'перЕпис') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь перЕпис`;
                        listmis.textContent += ' ' + 'перЕпис'
                    }
                    break
                case 153:
                    if((userAnswer == 'піалА') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь піалА`;
                        listmis.textContent += ' ' + 'піалА'
                    }
                    break
                case 154:
                    if((userAnswer == 'пІдданий') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь пІдданий`;
                        listmis.textContent += ' ' + 'пІдданий'
                    }
                    break
                case 155:
                    if((userAnswer == 'піддАний') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь піддАний`;
                        listmis.textContent += ' ' + 'піддАний'
                    }
                    break
                case 156:
                    if((userAnswer == 'пІдлітковий') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь пІдлітковий`;
                        listmis.textContent += ' ' + 'пІдлітковий'
                    }
                    break
                case 157:
                    if((userAnswer == 'пізнАння') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь пізнАння`;
                        listmis.textContent += ' ' + 'пізнАння'
                    }
                    break
                case 158:
                    if((userAnswer == 'пітнИй') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь пітнИй`;
                        listmis.textContent += ' ' + 'пітнИй'
                    }
                    break
                case 159:
                    if((userAnswer == 'піцЕрія') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь піцЕрія`;
                        listmis.textContent += ' ' + 'піцЕрія'
                    }
                    break
                case 160:
                    if((userAnswer == 'пОдруга') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь пОдруга`;
                        listmis.textContent += ' ' + 'пОдруга'
                    }
                    break

                case 161:
                    if((userAnswer == 'пОзначка') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь пОзначка`;
                        listmis.textContent += ' ' + 'пОзначка'
                    }
                    break
                case 162:
                    if((userAnswer == 'пОмилка') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь пОмилка`;
                        listmis.textContent += ' ' + 'пОмилка'
                    }
                    break
                case 163:
                    if((userAnswer == 'помІщик') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь помІщик`;
                        listmis.textContent += ' ' + 'помІщик'
                    }
                    break
                case 164:
                    if((userAnswer == 'помОвчати') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь помОвчати`;
                        listmis.textContent += ' ' + 'помОвчати'
                    }
                    break
                case 165:
                    if((userAnswer == 'понЯття') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь понЯття`;
                        listmis.textContent += ' ' + 'понЯття'
                    }
                    break
                case 166:
                    if((userAnswer == 'порядкОвий') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь порядкОвий`;
                        listmis.textContent += ' ' + 'порядкОвий'
                    }
                    break
                case 167:
                    if((userAnswer == 'посерЕдині') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь посерЕдині`;
                        listmis.textContent += ' ' + 'посерЕдині'
                    }
                    break
                case 168:
                    if((userAnswer == 'привезтИ') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь привезтИ`;
                        listmis.textContent += ' ' + 'привезтИ'
                    }
                    break
                case 169:
                    if((userAnswer == 'привестИ') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь привестИ`;
                        listmis.textContent += ' ' + 'привестИ'
                    }
                    break
                case 170:
                    if((userAnswer == 'прИморозок') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь прИморозок`;
                        listmis.textContent += ' ' + 'прИморозок'
                    }
                    break
                case 171:
                    if((userAnswer == 'принестИ') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь принестИ`;
                        listmis.textContent += ' ' + 'принестИ'
                    }
                    break
                case 172:
                    if((userAnswer == 'прИчіп') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь прИчіп`;
                        listmis.textContent += ' ' + 'прИчіп'
                    }
                    break
                case 173:
                    if((userAnswer == 'прОділ') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь прОділ`;
                        listmis.textContent += ' ' + 'прОділ'
                    }
                    break
                case 174:
                    if((userAnswer == 'промІжок') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь промІжок`;
                        listmis.textContent += ' ' + 'промІжок'
                    }
                    break
                case 175:
                    if((userAnswer == 'псевдонІм') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь псевдонІм`;
                        listmis.textContent += ' ' + 'псевдонІм'
                    }
                    break
                case 176:
                    if((userAnswer == 'рАзом') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь рАзом`;
                        listmis.textContent += ' ' + 'рАзом'
                    }
                    break
                case 177:
                    if((userAnswer == 'рЕмінь') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь рЕмінь`;
                        listmis.textContent += ' ' + 'рЕмінь'
                    }
                    break
                case 178:
                    if((userAnswer == 'рЕшето') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь рЕшето`;
                        listmis.textContent += ' ' + 'рЕшето'
                    }
                    break
                case 179:
                    if((userAnswer == 'рИнковий') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь рИнковий`;
                        listmis.textContent += ' ' + 'рИнковий'
                    }
                    break
                case 180:
                    if((userAnswer == 'рівнИна') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь рівнИна`;
                        listmis.textContent += ' ' + 'рівнИна'
                    }
                    break
                case 181:
                    if((userAnswer == 'роздрібнИй') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь роздрібнИй`;
                        listmis.textContent += ' ' + 'роздрібнИй'
                    }
                    break
                case 182:
                    if((userAnswer == 'рОзпірка') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь рОзпірка`;
                        listmis.textContent += ' ' + 'рОзпірка'
                    }
                    break
                case 183:
                    if((userAnswer == 'рукОпис') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь рукОпис`;
                        listmis.textContent += ' ' + 'рукОпис'
                    }
                    break
                case 184:
                    if((userAnswer == 'руслО') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь руслО`;
                        listmis.textContent += ' ' + 'руслО'
                    }
                    break
                case 185:
                    if((userAnswer == 'сантимЕтр') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь сантимЕтр`;
                        listmis.textContent += ' ' + 'сантимЕтр'
                    }
                    break
                case 186:
                    if((userAnswer == 'свЕрдло') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь свЕрдло`;
                        listmis.textContent += ' ' + 'свЕрдло'
                    }
                    break
                case 187:
                    if((userAnswer == 'серЕдина') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь серЕдина`;
                        listmis.textContent += ' ' + 'серЕдина'
                    }
                    break
                case 188:
                    if((userAnswer == 'сЕча') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь сЕча`;
                        listmis.textContent += ' ' + 'сЕча'
                    }
                    break
                case 189:
                    if((userAnswer == 'симетрІя') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь симетрІя`;
                        listmis.textContent += ' ' + 'симетрІя'
                    }
                    break
                case 190:
                    if((userAnswer == 'сільськогосподАрський') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь сільськогосподАрський`;
                        listmis.textContent += ' ' + 'сільськогосподАрський'
                    }
                    break
                case 191:
                    if((userAnswer == 'сімдесЯт') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь сімдесЯт`;
                        listmis.textContent += ' ' + 'сімдесЯт'
                    }
                    break
                case 192:
                    if((userAnswer == 'слИна') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь слИна`;
                        listmis.textContent += ' ' + 'слИна'
                    }
                    break
                case 193:
                    if((userAnswer == 'соломИнка') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь соломИнка`;
                        listmis.textContent += ' ' + 'соломИнка'
                    }
                    break
                case 194:
                    if((userAnswer == 'стАтуя') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь стАтуя`;
                        listmis.textContent += ' ' + 'стАтуя'
                    }
                    break
                case 195:
                    if((userAnswer == 'стовідсОтковий') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь стовідсОтковий`;
                        listmis.textContent += ' ' + 'стовідсОтковий'
                    }
                    break
                case 196:
                    if((userAnswer == 'стрибАти') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь стрибАти`;
                        listmis.textContent += ' ' + 'стрибАти'
                    }
                    break
                case 197:
                    if((userAnswer == 'текстовИй') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь текстовИй`;
                        listmis.textContent += ' ' + 'текстовИй'
                    }
                    break
                case 198:
                    if((userAnswer == 'течіЯ') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь течіЯ`;
                        listmis.textContent += ' ' + 'течіЯ'
                    }
                    break
                case 199:
                    if((userAnswer == 'тИгровий') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь тИгровий`;
                        listmis.textContent += ' ' + 'тИгровий'
                    }
                    break
                case 200:
                    if((userAnswer == 'тисОвий') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь тисОвий`;
                        listmis.textContent += ' ' + 'тисОвий'
                    }
                    break
                case 201:
                    if((userAnswer == 'тім’янИй') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь тім'яний`;
                        listmis.textContent += ' ' + 'тім’янИй'
                    }
                    break
                case 202:
                    if((userAnswer == 'травестІя') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь травестІя`;
                        listmis.textContent += ' ' + 'травестІя'
                    }
                    break
                case 203:
                    if((userAnswer == 'тризУб') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь тризУб`;
                        listmis.textContent += ' ' + 'тризУб'
                    }
                    break
                case 204:
                    if((userAnswer == 'тУлуб') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь тУлуб`;
                        listmis.textContent += ' ' + 'тУлуб'
                    }
                    break
                case 205:
                    if((userAnswer == 'украЇнський') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь украЇнський`;
                        listmis.textContent += ' ' + 'украЇнський'
                    }
                    break
                case 206:
                    if((userAnswer == 'уподОбання') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь уподОбання`;
                        listmis.textContent += ' ' + 'уподОбання'
                    }
                    break
                case 207:
                    if((userAnswer == 'урочИстий') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь урочИстий`;
                        listmis.textContent += ' ' + 'урочИстий'
                    }
                    break
                case 208:
                    if((userAnswer == 'усерЕдині') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь усерЕдині`;
                        listmis.textContent += ' ' + 'усерЕдині'
                    }
                    break
                case 209:
                    if((userAnswer == 'фартУх') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь фартУх`;
                        listmis.textContent += ' ' + 'фартУх'
                    }
                    break
                case 210:
                    if((userAnswer == 'фаховИй') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь фаховИй`;
                        listmis.textContent += ' ' + 'фаховИй'
                    }
                    break
                case 211:
                    if((userAnswer == 'фенОмен') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь фенОмен`;
                        listmis.textContent += ' ' + 'фенОмен'
                    }
                    break
                case 212:
                    if((userAnswer == 'фОльга') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь фОльга`;
                        listmis.textContent += ' ' + 'фОльга'
                    }
                    break

                case 213:
                    if((userAnswer == 'фОрзац') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь фОрзац`;
                        listmis.textContent += ' ' + 'фОрзац'
                    }
                    break
                case 214:
                    if((userAnswer == 'хАос') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь хАос`;
                        listmis.textContent += ' ' + 'хАос'
                    }
                    break
                case 215:
                    if((userAnswer == 'хаОс') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь хаОс`;
                        listmis.textContent += ' ' + 'хаОс'
                    }
                    break
                case 216:
                    if((userAnswer == 'цАрина') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь цАрина`;
                        listmis.textContent += ' ' + 'цАрина'
                    }
                    break
                case 217:
                    if((userAnswer == 'цемЕнт') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь цемЕнт`;
                        listmis.textContent += ' ' + 'цемЕнт'
                    }
                    break
                case 218:
                    if((userAnswer == 'цЕнтнер') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь цЕнтнер`;
                        listmis.textContent += ' ' + 'цЕнтнер'
                    }
                    break
                case 219:
                    if((userAnswer == 'ціннИк') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь ціннИк`;
                        listmis.textContent += ' ' + 'ціннИк'
                    }
                    break
                case 220:
                    if((userAnswer == 'чарівнИй') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь чарівнИй`;
                        listmis.textContent += ' ' + 'чарівнИй'
                    }
                    break
                case 221:
                    if((userAnswer == 'черговИй') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь черговИй`;
                        listmis.textContent += ' ' + 'черговИй'
                    }
                    break
                case 222:
                    if((userAnswer == 'читАння') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь читАння`;
                        listmis.textContent += ' ' + 'читАння'
                    }
                    break
                case 223:
                    if((userAnswer == 'чорнОзем') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь чорнОзем`;
                        listmis.textContent += ' ' + 'чорнОзем'
                    }
                    break
                case 224:
                    if((userAnswer == 'чорнОслив') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь чорнОслив`;
                        listmis.textContent += ' ' + 'чорнОслив'
                    }
                    break
                case 225:
                    if((userAnswer == 'чотирнАдцять') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь чотирнАдцять`;
                        listmis.textContent += ' ' + 'чотирнАдцять'
                    }
                    break
                case 226:
                    if((userAnswer == 'шляхопровІд') || (userAnswer == '2'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь шляхопровІд`;
                        listmis.textContent += ' ' + 'шляхопровІд'
                    }
                    break
                case 227:
                    if((userAnswer == 'шовкОвий') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь шовкОвий`;
                        listmis.textContent += ' ' + 'шовкОвий'
                    }
                    break
                case 228:
                    if((userAnswer == 'шофЕр') || (userAnswer == '4'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь шофЕр`;
                        listmis.textContent += ' ' + 'шофЕр'
                    }
                    break
                case 229:
                    if((userAnswer == 'щЕлепа') || (userAnswer == '5'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь щЕлепа`;
                        listmis.textContent += ' ' + 'щЕлепа'
                    }
                    break
                case 230:
                    if((userAnswer == 'щИпці') || (userAnswer == '3'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь щИпці`;
                        listmis.textContent += ' ' + 'щИпці'
                    }
                    break
                case 231:
                    if((userAnswer == 'щодобовИй') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь щодобовИй`;
                        listmis.textContent += ' ' + 'щодобовИй'
                    }
                    break
                case 232:
                    if((userAnswer == 'ярмаркОвий') || (userAnswer == '1'))
                    {
                        correctCount++;
                        document.getElementById("result").innerText = "Правильно!";
                    }
                    else {
                        document.getElementById("result").innerText = `Помилка, правильна відповідь ярмаркОвий`;
                        listmis.textContent += ' ' + 'ярмаркОвий'
                    }
                    break
    
            }

            if(document.getElementById("result").innerText != "Правильно!")
            {
                saved.push(num1)
                arraycontainer += 1
            }
            console.log(saved)

            

            document.getElementById("correctCount").innerText = correctCount;
            document.getElementById("totalCount").innerText = totalCount;

            document.getElementById('score').textContent = ((correctCount / totalCount) * 100).toFixed(2);

            nextTask()
        }

        window.onload = nextTask;