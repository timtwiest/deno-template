default: run

run:
	@echo "Starting application..."
	deno run --allow-env --allow-read --config tsconfig.json \
		src/server.ts

debug:
	@echo "Starting debugging..."
	deno run -A --inspect-brk src/server.ts

test:
	@echo "Running tests..."
	deno test

build:
	@echo "Generating a build..."
	mkdir -p dist
	deno bundle src/server.ts dist/server

clean:
	@echo "Cleaning the dist directory..."
	rm -rf dist
