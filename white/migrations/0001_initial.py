# Generated by Django 3.0.6 on 2020-05-25 15:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nome', models.CharField(max_length=200)),
                ('cpf', models.CharField(default=0, max_length=11)),
                ('endereco', models.CharField(max_length=300)),
                ('cidade', models.CharField(max_length=100)),
                ('bairro', models.CharField(max_length=140)),
                ('telefone1', models.CharField(blank=True, max_length=11)),
                ('telefone2', models.CharField(blank=True, max_length=11)),
            ],
        ),
    ]
