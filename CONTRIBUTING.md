# 🤝 Contributing to Perfect Prompt

Thank you for your interest in contributing to Perfect Prompt! This document provides guidelines for contributing to the project.

## 🌟 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

### Suggesting Features

We welcome feature suggestions! Please:
- Check if the feature already exists
- Explain the use case
- Describe the expected behavior
- Provide examples if possible

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Keep changes focused and atomic

4. **Test your changes**
   ```bash
   npm run build
   npm run lint
   ```

5. **Commit with clear messages**
   ```bash
   git commit -m "feat: add new feature"
   ```

   Use conventional commits:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation
   - `style:` - Formatting
   - `refactor:` - Code restructuring
   - `test:` - Adding tests
   - `chore:` - Maintenance

6. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## 📝 Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use meaningful variable names
- Keep functions small and focused
- Add JSDoc comments for complex functions
- Use Tailwind CSS for styling (no inline styles)

## 🧪 Testing

Before submitting:
- Test in both English and Arabic
- Test on mobile and desktop
- Verify all features work
- Check for console errors
- Test with actual OpenAI API

## 🎨 Design Guidelines

- Maintain the dark blue theme
- Keep UI clean and minimal
- Ensure RTL support for Arabic
- Follow accessibility best practices
- Test responsive design

## 📚 Documentation

When adding features:
- Update README.md if needed
- Add JSDoc comments
- Update relevant .md files
- Include examples

## ⚡ Performance

- Optimize images (< 100 KB)
- Lazy load when possible
- Minimize bundle size
- Test with Lighthouse

## 🌍 Internationalization

When adding text:
- Add to `lib/translations.ts`
- Provide both English and Arabic
- Test RTL layout
- Consider cultural context

## ❓ Questions?

Feel free to:
- Open a discussion
- Ask in issues
- Reach out to maintainers

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for making Perfect Prompt better! 🚀

