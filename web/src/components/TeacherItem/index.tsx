import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://instagram.faju8-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93703428_248112239650711_4538640362868047872_n.jpg?_nc_ht=instagram.faju8-1.fna.fbcdn.net&_nc_ohc=Mk0E5Lk1TkwAX8P6fEP&oh=98f8c6920c0be59f3fb393ecec7a48bb&oe=5F553ECD" alt="thieres" />
                <div>
                    <strong>Thieres Lima</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>Neque porro quisquam est qui dolorem ipsum quia dolor.
                        <br /><br />
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipisci.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;