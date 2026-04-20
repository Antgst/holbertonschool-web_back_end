#!/usr/bin/env python3
"""Module providing a helper function for pagination indexing."""

def index_range (page: int, page_size: int) -> tuple [int, int]:
    """Return a tuple containing the start and end indexes for pagination.

    Args:
        page: The current page number, starting from 1.
        page_size: The number of items per page.

    Returns:
        A tuple of two integers:
        - start index (inclusive)
        - end index (exclusive)
    """

    start = (page - 1) * page_size
    end = page * page_size
    
    return (start, end)
