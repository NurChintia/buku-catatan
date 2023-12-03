const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');
const catatan = require('./catatan.js');
const yargs = require('yargs');

yargs.version('10.1.0');

// Membuat perintah (command) tambah
yargs.command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    builder: {
        judul: {
            describe: 'Judul Catatan',
            demandOption: true,
            type: 'string'
        },
        isi: {
            describe: 'Isi catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.tambahCatatan(argv.judul, argv.isi);
    }
});

// Perintah hapus
yargs.command({
    command: 'hapus',
    describe: 'hapus catatan',
    builder: {
        judul: {
            describe: 'Judul Catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.hapusCatatan(argv.judul);
    }
});

// Perintah list (daftar) semua catatan
yargs.command({
    command: 'list',
    describe: 'menampilkan list semua catatan',
    handler: function () {
        console.log('Daftar Catatan:');
        catatan.tampilkanCatatan();
    }
});

// Perintah baca (read) sebuah catatan
yargs.command({
    command: 'baca',
    describe: 'membaca sebuah catatan',
    builder: {
        judul: {
            describe: 'Judul Catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.bacaCatatan(argv.judul);
    }
});
// letakkan bagian ini pada baris terakhir
yargs.parse();
