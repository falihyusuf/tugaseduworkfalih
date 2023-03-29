Feature: Pencarian Data
    Sebagai pengguna
    Saya ingin dapat mencari data pada website
    Untuk memudahkan saya dalam mencari informasi

Scenario: Pencarian data pada halaman utama
    Given Saya berada di halaman utama website Zero Bank
    When Saya memasukkan "informasi" pada kolom pencarian
    And Saya menekan tombol "Search"
    Then Saya seharusnya dapat melihat hasil pencarian yang relevan dengan "informasi"

Scenario: Pencarian data tidak ditemukan
    Given Saya berada di halaman utama website Zero Bank
    When Saya memasukkan "abcd1234" pada kolom pencarian
    And Saya menekan tombol "Search"
    Then Saya seharusnya melihat pesan "No results were found for the query: abcd1234"
