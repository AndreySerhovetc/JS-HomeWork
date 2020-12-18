<?php
	// Переменная в PHP это $имя_переменной
	// filter_var($_POST["атрибут name тэга input"], FILTER_SANITIZE_STRING)
	$name      = filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
	$email     = filter_var($_POST["user_email"], FILTER_SANITIZE_STRING);
	$phone 	   = filter_var($_POST["user_phone"], FILTER_SANITIZE_STRING);
	$age	   = filter_var($_POST["user_age"], FILTER_SANITIZE_STRING);
	$pass	   = filter_var($_POST["user_password"], FILTER_SANITIZE_STRING);
	$errors;

	//В PHP добавить лишь проверку на пустоту
	if (empty($name)) {
			$errors = "Введите имя";
	}
	if (empty($email)) {
			$errors = "Введите email";
	}
	if (empty($phone)) {
			$errors = "Введите номер телефона";
	}
	if (empty($age)) {
			$errors = "Введите возраст";
	}
	if (empty($pass)) {
			$errors = "Введите пароль";
	}

	// Чтобы добавить несколько полей в PHP нужно использовать .=
	// Пример ниже

	$to = "serhovetc88@gmail.com";
	$mailBody = "JS. ДЗ номер 4\n";
	$mailBody .= "Поле имя: " . $name . "\n";
	$mailBody .= "Поле почта: " . $email . "\n";
	$mailBody .= "Поле телефон: " . $phone . "\n";
	$mailBody .= "Поле возраст: " . $age . "\n";
	// и так столько, сколько нужно

	// Это отправка. Это не трогаем
	if (mail($to, 'JS. ДЗ номер 4', $mailBody)) {
			$output = "ok";
			die($output);
	} else {
			$output = $errors;
			die($output);
	}
?>