<?php

function db_connect(): PDO
{
    $db = new PDO(
        'mysql:host=localhost;dbname=lp_official;charset=utf8',
        'root',
        ''
    );

    return $db;
}

if (
    isset($_POST['student-mail']) &&
    isset($_POST['student-fullname']) &&
    isset($_POST['student-gender']) &&
    isset($_POST['student-grade']) &&
    isset($_POST['student-birthdate'])
) {
    insert_student(
        htmlspecialchars($_POST['student-mail']),
        htmlspecialchars($_POST['student-fullname']),
        htmlspecialchars($_POST['student-gender']),
        new DateTime($_POST['student-birthdate']),
        htmlspecialchars($_POST['student-grade'])
    );
}

function insert_student(
    string $email,
    string $fullname,
    string $gender,
    DateTime $birthdate,
    int $gradeId
) : bool {
    $query = ("INSERT INTO student (grade_id, email, fullname, birthdate, gender)
        VALUES (:grade_id, :email, :fullname, :birthdate, :gender)"
    );
    $statement = db_connect()->prepare($query);
    $success = $statement->execute([
        ':grade_id' => $gradeId,
        ':email' => $email,
        ':fullname' => $fullname,
        'birthdate' => $birthdate->format('Y-m-d'),
        'gender' => $gender
    ]);

    if ($success) {
        echo 'Student registed successfully.';
        return true;
    } else {
        echo 'An error occured.';
        return false;
    }   
}
