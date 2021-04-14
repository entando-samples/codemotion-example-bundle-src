package com.entando.codemotion.bff.rest;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ApiController {

	@GetMapping("/metrics")
	public Response api() {
		return new Response(350);
	}

	@Data
	public static class Response {
		@NonNull
		private final long metric;
	}

}
