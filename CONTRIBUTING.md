# Contributing to Blockchain Insurance Framework

We welcome contributions to the Blockchain Insurance Framework project! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/blockchain-insurance-framework.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes: `npm run test`
6. Commit your changes: `git commit -am 'Add your message'`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Submit a pull request

## Development Setup

```bash
# Install dependencies
npm install

# Compile smart contracts
npm run compile

# Run tests
npm run test

# Run local blockchain
npm run hardhat:node

# Deploy to testnet
npm run deploy:testnet
```

## Code Standards

### Smart Contracts (Solidity)
- Follow Solidity best practices and OpenZeppelin guidelines
- Use clear, descriptive variable and function names
- Add NatSpec comments for all public functions
- Include comprehensive event logging
- Use access control modifiers appropriately

### Backend Code (JavaScript/Node.js)
- Follow ES6+ standards
- Use async/await for asynchronous operations
- Add JSDoc comments for functions
- Handle errors appropriately
- Use descriptive variable names

### Testing
- Write tests for all new features
- Aim for >80% code coverage
- Test edge cases and error conditions
- Use descriptive test names

## Commit Messages

Use clear, descriptive commit messages:
- `feat: Add new feature description`
- `fix: Fix bug description`
- `docs: Update documentation`
- `test: Add tests for feature`
- `refactor: Refactor code for improvement`

## Pull Request Process

1. Update documentation if needed
2. Add/update tests for your changes
3. Ensure all tests pass: `npm run test`
4. Update the README if applicable
5. Keep commits atomic and well-described
6. Ensure your PR title is descriptive

## Reporting Issues

When reporting issues, please include:
- Clear description of the problem
- Steps to reproduce (if applicable)
- Expected behavior
- Actual behavior
- Screenshots or logs (if applicable)
- Environment details (OS, Node version, etc.)

## Security

If you discover a security vulnerability, please email security@example.com instead of using the issue tracker.

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to open an issue for questions or discussions about the project.

---

Thank you for contributing to the Blockchain Insurance Framework!
