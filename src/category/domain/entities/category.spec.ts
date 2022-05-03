import { Category } from "./category";
import { omit } from 'lodash'
describe("Category Unit Tests", () => {
  test("constructor of category", () => {
    let category = new Category({ name: 'any_name'})

    let props = omit(category.props, 'created_at')

    expect(props).toStrictEqual({
      name: 'any_name',
      description: null,
      is_active: true,
    })
    expect(category.props.created_at).toBeInstanceOf(Date)

    let created_at = new Date();
    category = new Category({
      name: 'any_name',
      description: 'any_description',
      is_active: false,
    })

    expect(category.props).toStrictEqual({
      name: 'any_name',
      description: 'any_description',
      is_active: false,
      created_at,
    })

    category = new Category({
      name: 'any_name',
      description: 'any_description',
    })

    expect(category.props).toMatchObject({
      name: 'any_name',
      description: 'any_description',
    })

    category = new Category({
      name: 'any_name',
      is_active: true,
    })

    expect(category.props).toMatchObject({
      name: 'any_name',
      is_active: true,
    })

    created_at = new Date();
    category = new Category({
      name: 'any_name',
      created_at
    })

    expect(category.props).toMatchObject({
      name: 'any_name',
      created_at: created_at,
    })
  });

  test('getter of name prop', () => {
    const category = new Category({ name: 'any_name' });
    expect(category.name).toBe('any_name');
  })

  test('getter and setter of description prop', () => {
    let category = new Category({ name: 'any_name', description: 'any_description' });
    expect(category.description).toBe('any_description');

    category = new Category({ name: 'any_name' });
    expect(category.description).toBeNull();

    category = new Category({ name: 'any_name'});

    category['description'] = 'other_description'
    expect(category.description).toBe('other_description')

    category['description'] = undefined
    expect(category.description).toBeNull()
  })

  test('getter and setter of is_active prop', () => {
    let category = new Category({ name: 'any_name'});
    expect(category.is_active).toBeTruthy();

    category = new Category({ name: 'any_name', is_active: true });
    expect(category.is_active).toBeTruthy();

    category = new Category({ name: 'any_name', is_active: false });
    expect(category.is_active).toBeFalsy();
  })

  test('getter of created_at prop', () => {
    let category = new Category({ name: 'any_name' });
    expect(category.created_at).toBeInstanceOf(Date)

    const created_at = new Date();
    category = new Category({ name: 'any_name', created_at });
    expect(category.created_at).toBe(created_at)
  })
});
