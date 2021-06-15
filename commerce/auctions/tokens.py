from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils import six
import random
class TokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        # return (random.randint(100000,999999))
        return (
            six.text_type(user.pk) + six.text_type(timestamp) +
            six.text_type(user.is_active)
        )
account_activation_token = TokenGenerator()