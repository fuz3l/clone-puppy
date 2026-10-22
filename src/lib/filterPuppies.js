/**
 * @typedef {import('@/data/puppies').Puppy} Puppy
 */

/**
 * Filter criteria options.
 * @typedef {Object} PuppyFilters
 * @property {string} [origin] - 'all' | 'imported' | 'local'
 * @property {string} [breed] - 'Maltipoo' | 'Pomeranian' | 'Poodle' | 'Cavapoo' | 'Shih Tzu'
 * @property {string} [gender] - 'boy' | 'girl'
 * @property {string} [status] - 'available' | 'gone-home'
 */

/**
 * Filters an array of puppies based on origin, breed, and gender criteria.
 *
 * @param {Puppy[]} list - The initial puppies array.
 * @param {PuppyFilters} filters - Filter criteria object.
 * @returns {Puppy[]} Filtered array of puppies.
 */
export function filterPuppies(list = [], filters = {}) {
  const { origin, breed, gender, status = "available" } = filters;

  return list.filter((puppy) => {
    // Filter by status (available vs gone-home)
    if (status && puppy.status !== status) {
      return false;
    }

    // Filter by origin ('imported' vs 'local')
    if (origin && origin.toLowerCase() !== "everywhere" && origin.toLowerCase() !== "all") {
      if (puppy.origin.toLowerCase() !== origin.toLowerCase()) {
        return false;
      }
    }

    // Filter by breed
    if (breed && breed.toLowerCase() !== "all") {
      const matchBreed = puppy.breed.toLowerCase().includes(breed.toLowerCase());
      if (!matchBreed) {
        return false;
      }
    }

    // Filter by gender ('boy' vs 'girl', or 'boys' vs 'girls')
    if (gender && gender.toLowerCase() !== "all") {
      const normalizedGender = gender.toLowerCase().startsWith("boy") ? "boy" : "girl";
      if (puppy.gender !== normalizedGender) {
        return false;
      }
    }

    return true;
  });
}
