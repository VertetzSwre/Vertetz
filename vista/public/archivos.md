.dropdown-content {
    flex-direction: column;
    width: 100%;
    background-color: #1c1c1c; /* Fondo de los dropdowns */
    display: none;
}

.dropdown-content.show {
    display: block;
}

.dropdown-content a {
    padding: 10px 30px; /* Sangría a la derecha */
    font-weight: normal;
    box-sizing: border-box; /* Asegura que el padding no haga que los elementos se salgan */
}

.dropdown-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border: 1px solid #1c1c1c;
}