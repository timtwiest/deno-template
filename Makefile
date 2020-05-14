default: run

build:
	@echo "Generating a build..."
	mkdir dist
	deno bundle src/server.ts dist/server

clean:
	@echo "Cleaning the dist directory..."
	rm -rf dist

debug:
	@echo "Starting debugging..."
	deno run -A --inspect-brk src/server.ts

run:
	@echo "Starting application..."
	deno run --allow-env --allow-read --config tsconfig.json src/server.ts

test:
	@echo "Running tests..."
	deno test