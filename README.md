# Veri Yapıları ve Algoritmalar > Insertion Sort Projesi

# Proje 1

## [22,27,16,2,18,6] -> Insertion Sort

### 1. Yukarıda verilen dizinin sort türüne göre aşamalarını yazınız.
1. [22-16-27-2-18-6] 27 sayısı önce soldaki rakam ile kendini kıyaslar, ondan büyük olduğu için yerinde kalır. Sonra sağındaki 16 dan büyük olduğu için 16 ile yer değiştirir.

2. [16-22-27-2-18-6] 16 kendini soldaki 22 ile kıyaslar ve yer değiştirirler.

3. [16-22-2-27-18-6] bu aşamadan sonra 2 sayısı kendini sürekli soldaki sayılarla kıyaslamaya başlar ve önce 27 ile yer değiştirir.

4. [16-2-22-27-18-6] 2 sayısı 22 sayısı ile kendini kıyaslar ve yer değiştirir.

5. [2-16-22-27-18-6] 2 sayısı 16 sayısı ile kendini kıyaslar ve yer değiştirir.

6. [2-16-22-18-27-6] bu aşamadan sonra 18 sayısı kendini sürekli soldaki sayılarla kıyaslamaya başlar ve önce 27 ile yer değiştirir.

7. [2-16-18-22-27-6] 18 sayısı 22 sayısı ile kendini kıyaslar ve yer değiştirir. Kendisini 16 ile kıyaslayıp daha küçük olmadığı için yerinde kalır.

8. [2-16-18-22-6-27] bu aşamadan sonra 6 sayısı kendini sürekli soldaki sayılarla kıyaslamaya başlar ve önce 27 ile yer değiştirir.

9. [2-16-18-6-22-27] 6 sayısı 22 sayısı ile kendini kıyaslar ve yer değiştirir.

10. [2-16-6-18-22-27] 6 sayısı 18 sayısı ile kendini kıyaslar ve yer değiştirir.

11. [2-6-16-18-22-27] 6 sayısı 16 sayısı ile kendini kıyaslar ve yer değiştirir. Kendisini 2 ile kıyaslayıp daha küçük olmadığı için yerinde kalır.

### 2. Big-O gösterimini yazınız.

O(n^2)

### 3. Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.

### 4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

Yukarıdaki açıklamaya göre 18 sayısı dizinin ortasında bulunduğu için Avarage Case kapsamına girer.

### [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

1. [3,7,5,8,2,9,4,15,6] Önce 3 kendini 7 ile kıyaslar ve sola geçer.

2. [3,5,7,8,2,9,4,15,6] 5 kendini 7 ile kıyaslar ve sola geçer. Sonra kendini 3 ile kıyaslar, daha küçük olmadığı için yerinde kalır.

3. [3,5,7,2,8,9,4,15,6] 8 kendini 7 ile kıyaslar, daha büyük olduğu için yerinde kalır. sonra 2 ile kendini kıyaslar. 2 daha küçük olduğu için yer değiştirir.

4. [2,3,5,7,8,9,4,15,6] 2 kendini 7 ile kıyaslar, 2 daha küçük olduğu için önce 7 ile yer değiştirir. Sonra kendisini 5 ile kıyaslar, ondan da küçük olduğu için yer değiştirir. Sonra kendini 3 ile kıyaslar ve onunla da yer değiştirir.


## [16,21,11,8,12,22] -> Merge Sort


[16,21,11] [8,12,22]

[16,21] [11] [8,12] [22]

[16] [21] [11] [8] [12] [22]

[11,16,21] [8,12,22]

[8,11,12,16,21,22]

Big-O gösterimi: O(n.logn)

## [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] --> Binary-Search-Tree

           7
         /  \
        5    8
       / \    \
      1   6    9
     / \
    0   3
       / \
      2   4 
      

5<7;  7 nin soluna yazılır
1<5; 5 in soluna yazılır
8>7; 7 nin sağına yazılır
3>1; 1 in sağına yazılır
6>5; 5 in sağına yazılır
0<1; 1 in soluna yazılır
9>8; 8 in sağına yazılır
4<5; 5 in soluna yazılır
2>1; 1 in sağına yazılır

# SQL  1
1. SELECT title, description FROM film;
2. SELECT * FROM film WHERE length>60 AND length<75;
3. SELECT * FROM film WHERE rental_rate = 0.99 AND replacement_cost = 12.99 OR replacement_cost = 28.99;
4. ELECT last_name FROM customer WHERE first_name = 'Mary'; --Smith
5. SELECT * FROM film WHERE NOT (length > 50 AND rental_rate = 2.99 OR rental_rate = 4.99);

# SQL  2
1. SELECT * FROM film WHERE replacement_cost BETWEEN 12.99 AND 16.99;
2. SELECT first_name, last_name FROM actor WHERE first_name IN ('Penelope', 'Nick', 'Ed');
3. SELECT * FROM film WHERE rental_rate IN (0.99, 2.99, 4.99) AND replacement_cost IN (12.99, 15.99, 28.99);

# SQL  3
1. SELECT * FROM country WHERE country LIKE 'A%a';
2. SELECT * FROM country WHERE country LIKE '_____%n';
3. SELECT * FROM film WHERE title ILIKE '%T%T%T%T%';
4. SELECT rental_rate FROM film WHERE title ILIKE 'C%' AND length >90 AND rental_rate = 2.99;

# SQL  4
1. SELECT DISTINCT replacement_cost from film;
2. SELECT COUNT(DISTINCT replacement_cost) from film;
3. SELECT COUNT(*) FROM film WHERE title LIKE 'T%' AND rating = 'G';
4. SELECT COUNT(*) FROM country WHERE country LIKE '_____';
5. SELECT COUNT(*) FROM city WHERE city LIKE 'R%r';

# SQL  5
1. SELECT * FROM film
WHERE title LIKE '%n'
ORDER BY length DESC
LIMIT 5;

2. SELECT * FROM film
WHERE title LIKE '%n'
ORDER BY length 
OFFSET 5
LIMIT 5;

3. SELECT * FROM customer
WHERE store_id = 1
ORDER BY last_name DESC;

# SQL  6
1. SELECT ROUND(AVG(rental_rate),2) FROM film;
2. SELECT COUNT(*) FROM film WHERE title LIKE 'C%';
3. SELECT MAX(length) FROM film WHERE rental_rate = 0.99;
4. SELECT COUNT(DISTINCT replacement_cost ) FROM film WHERE length > 150;

# SQL  7
1. SELECT rating, COUNT(*) FROM film
GROUP BY rating;

2. SELECT replacement_cost, COUNT(*) FROM film
GROUP BY replacement_cost
HAVING COUNT(*)>50;

3. SELECT store_id, COUNT(*) FROM customer
GROUP BY store_id;

4. SELECT country_id, COUNT(*) FROM city
GROUP BY country_id
ORDER BY count DESC; --44 & 60

# SQL  9
1. SELECT * FROM city
INNER JOIN country ON country.country_id = city.country_id;

2. SELECT payment_id, first_name, last_name FROM customer
INNER JOIN payment ON payment.customer_id = customer.customer_id;

3. SELECT rental_id, first_name, last_name FROM customer
INNER JOIN rental ON rental.customer_id = customer.customer_id;

# SQL 10
1. SELECT city, country FROM city
LEFT JOIN country ON country.country_id = city.country_id;

2. SELECT payment_id, first_name, last_name FROM customer
RIGHT JOIN payment ON payment.customer_id = customer.customer_id;

3. SELECT rental_id, first_name, last_name FROM customer
FULL JOIN rental ON rental.customer_id = customer.customer_id;

# SQL 11
1. (SELECT first_name FROM actor)
UNION (ALL)
(SELECT first_name FROM customer);
2. (SELECT first_name FROM actor)
INTERSECT (ALL)
(SELECT first_name FROM customer);

3. (SELECT first_name FROM actor)
EXCEPT (ALL)
(SELECT first_name FROM customer);

# SQL 12
1. SELECT COUNT(*) FROM film
WHERE length > (SELECT AVG(length) from film);

2. SELECT COUNT(rental_rate) FROM film
WHERE rental_rate = (SELECT MAX(rental_rate) from film);

3. SELECT rental_rate, replacement_cost from film
WHERE rental_rate = (SELECT MIN(rental_rate) from film) AND
replacement_cost = (SELECT MIN(replacement_cost) from film);

4. SELECT first_name, last_name FROM customer
JOIN payment ON payment.customer_id = ANY
(SELECT customer_id from payment
GROUP BY customer_id
ORDER BY COUNT(customer_id) DESC
LIMIT 5)
LIMIT 5;
