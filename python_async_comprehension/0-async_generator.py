#!/usr/bin/env python3
"""Module for asynchronous generator."""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Yield 10 random floating-point numbers after
    waiting one second each time."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
