# Generated by Django 4.2.1 on 2023-05-07 10:21

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0003_transaction_transaction_id_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="wallet",
            name="address",
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="transaction",
            name="created_time",
            field=models.DateTimeField(
                default=datetime.datetime(2023, 5, 7, 13, 51, 12, 462852),
                editable=False,
            ),
        ),
        migrations.AlterField(
            model_name="transaction",
            name="expire_time",
            field=models.DateTimeField(
                default=datetime.datetime(2023, 5, 7, 14, 6, 12, 463352), editable=False
            ),
        ),
    ]