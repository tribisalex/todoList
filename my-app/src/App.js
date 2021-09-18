import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    Мои списки дел
                    <div>
                        <div>
                            <input type='text' placeholder='Добавить список'></input>
                            <button>добавить</button>
                        </div>
                            <li>Вымыть кухню <button>Удалить</button></li>
                            <li>Пойти в театр<button>Удалить</button> </li>
                        <div>
                            <button>Сохранить</button>
                            <button>Очистить</button>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    );
}

export default App;
