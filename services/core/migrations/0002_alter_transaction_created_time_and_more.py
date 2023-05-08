# Generated by Django 4.2.1 on 2023-05-07 07:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="transaction",
            name="created_time",
            field=models.DateTimeField(
                default=datetime.datetime(2023, 5, 7, 11, 24, 32, 7495), editable=False
            ),
        ),
        migrations.AlterField(
            model_name="transaction",
            name="expire_time",
            field=models.DateTimeField(
                default=datetime.datetime(2023, 5, 7, 11, 39, 32, 7495), editable=False
            ),
        ),
    ]
